import json
import re
from cert_compiler import clean_question_text, merge_broken_options
from module_mapper import assign_module
from explanation_builder import generate_explanation

with open('cert_metadata.json', 'r', encoding='utf-8') as f:
    CERT_META = json.load(f)

# Categories definition to preserve exactly
CATEGORIES_JS = """const CERTIFICATE_CATEGORIES = {
  web: {
    id: "web",
    name: "Webové aplikace",
    shortName: "Web",
    icon: "fas fa-globe",
    color: "#38bdf8",
    description: "HTML5, CSS3 a moderní JavaScript (JSE 1 & 2)",
    certs: ["html", "css", "js", "js2"]
  },
  db: {
    id: "db",
    name: "Databázové systémy",
    shortName: "Databáze",
    icon: "fas fa-database",
    color: "#f87171",
    description: "Oracle Database Design & Database Programming With SQL",
    certs: ["oracle_dd", "oracle_sql"]
  },
  systems: {
    id: "systems",
    name: "Počítačové systémy a sítě",
    shortName: "Sítě & Systémy",
    icon: "fas fa-network-wired",
    color: "#00bceb",
    description: "NDG Linux Essentials & Cisco CCNA (ITN + SRWE)",
    certs: ["linux", "ccna_itn", "ccna_srwe"]
  },
  software: {
    id: "software",
    name: "Programové vybavení",
    shortName: "Programování",
    icon: "fab fa-python",
    color: "#3776ab",
    description: "Cisco Python Essentials 1 (PCEP)",
    certs: ["python"]
  }
};
"""

target_counts = {
    'html': 40,
    'css': 40,
    'js': 40,
    'js2': 40,
    'oracle_dd': 45,
    'oracle_sql': 45,
    'linux': 45,
    'ccna_itn': 45,
    'ccna_srwe': 45,
    'python': 45,
}

prefix_map = {
    'html': 'html',
    'css': 'css',
    'js': 'js',
    'js2': 'js2',
    'oracle_dd': 'dd',
    'oracle_sql': 'sql',
    'linux': 'linux',
    'ccna_itn': 'itn',
    'ccna_srwe': 'srwe',
    'python': 'py',
}

def extract_code_snippet(qtext):
    # Check if there is an explicit multi-line code block in question text
    # e.g. SQL statements, code tags
    lines = qtext.split('\n')
    if len(lines) > 1 and any(k in lines[0].lower() for k in ['evaluate', 'consider', 'structure', 'following', 'exhibit']):
        # If middle lines look like code or table definitions
        q_header = lines[0]
        code_lines = []
        rest_lines = []
        in_code = False
        
        for l in lines[1:]:
            if any(l.strip().startswith(kw) for kw in ['SELECT', 'ALTER', 'CREATE', 'INSERT', 'UPDATE', 'DELETE', 'def ', 'let ', 'var ', 'const ', 'class ', '<']):
                code_lines.append(l)
            elif any(k in l for k in ['NUMBER(', 'VARCHAR2(', 'DATE', 'PRIMARY KEY']):
                code_lines.append(l)
            else:
                if code_lines:
                    rest_lines.append(l)
                else:
                    q_header += "\n" + l
                    
        if code_lines:
            q_final = q_header + ("\n" + "\n".join(rest_lines) if rest_lines else "")
            return q_final.strip(), "\n".join(code_lines).strip()
            
    return qtext, None

def compile_cert(cert_id):
    raw_file = f'authentic_raw/{cert_id}.json'
    with open(raw_file, 'r', encoding='utf-8') as f:
        raw_items = json.load(f)
        
    meta = CERT_META[cert_id]
    valid_module_ids = set(m['id'] for m in meta['modules'])
    target_count = target_counts.get(cert_id, 40)
    pfx = prefix_map[cert_id]
    
    selected = []
    seen_q = set()
    
    for item in raw_items:
        raw_q = clean_question_text(item['question'])
        raw_opts, c_idx = merge_broken_options(item['options'], item['correct'])
        
        if len(raw_opts) < 2 or c_idx is None or c_idx >= len(raw_opts):
            continue
            
        # Clean duplicates
        norm_key = re.sub(r'[^a-zA-Z0-9]', '', raw_q.lower())[:80]
        if norm_key in seen_q:
            continue
            
        # Check options
        if any(len(o) == 0 for o in raw_opts):
            continue
            
        seen_q.add(norm_key)
        
        # Check code snippet
        q_text, code_snip = extract_code_snippet(raw_q)
        
        # Determine module
        mod_id = assign_module(cert_id, q_text)
        if mod_id not in valid_module_ids:
            mod_id = meta['modules'][0]['id']
            
        # Generate explanation
        exp = generate_explanation(cert_id, q_text, raw_opts, c_idx, item.get('explanation', ''))
        
        selected.append({
            'id': f"{pfx}_q{len(selected)+1:02d}",
            'module': mod_id,
            'question': q_text,
            'code': code_snip,
            'options': raw_opts,
            'correct': c_idx,
            'explanation': exp
        })
        
        if len(selected) == target_count:
            break
            
    print(f"Compiled {cert_id}: {len(selected)} / {target_count} questions")
    return {
        **meta,
        'questions': selected
    }

if __name__ == '__main__':
    all_compiled = {}
    total_q = 0
    for cid in ['html', 'css', 'js', 'js2', 'oracle_dd', 'oracle_sql', 'linux', 'ccna_itn', 'ccna_srwe', 'python']:
        compiled = compile_cert(cid)
        all_compiled[cid] = compiled
        total_q += len(compiled['questions'])
        
    print(f"\nTOTAL QUESTIONS COMPILED: {total_q}")
    
    # Generate JavaScript file content
    js_content = CATEGORIES_JS + "\nconst CERTIFICATES_DATA = " + json.dumps(all_compiled, ensure_ascii=False, indent=2) + ";\n"
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print("data.js successfully written!")
