import os
import re
import json
import urllib.request
import html as html_lib

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(BASE_DIR, 'authentic_raw')
os.makedirs(OUTPUT_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fetch(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def clean_text(s):
    # 1. Strip ad tags and line breaks
    s = re.sub(r'<pgs-ad[^>]*>.*?</pgs-ad>', '', s, flags=re.DOTALL)
    s = re.sub(r'<br\s*/?>', '\n', s)
    s = re.sub(r'</p>', '\n', s)
    # 2. Strip actual DOM tags like <span>, <code>, <em>, <strong> BEFORE unescaping
    # This prevents &lt;button&gt; from being unescaped into <button> and then destroyed by tag stripping!
    s = re.sub(r'<[^>]+>', '', s)
    # 3. Now safely unescape entities (&lt; -> <, &gt; -> >, etc.)
    s = html_lib.unescape(s)
    # 4. Normalize quotes and spaces
    s = s.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    s = s.replace('&nbsp;', ' ').replace('\xa0', ' ')
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

# 1. PARSER FOR DENIACE BLOGSPOT (Oracle Database Design & SQL)
def parse_deniace(url):
    try:
        content = fetch(url)
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []
    
    divs = re.findall(r'<div[^>]*class="?MsoNoSpacing"?[^>]*>(.*?)</div>', content, re.DOTALL | re.IGNORECASE)
    items = [clean_text(d) for d in divs if clean_text(d)]
    
    questions = []
    current_q = None
    state = 'idle'
    
    for text in items:
        m_q = re.match(r'^(\d+)\.\s+(.*)', text)
        if m_q:
            if current_q and len(current_q['options']) >= 2 and current_q['correct'] is not None:
                questions.append(current_q)
            qnum = int(m_q.group(1))
            first_line = m_q.group(2)
            current_q = {
                'source_num': qnum,
                'question_parts': [],
                'options': [],
                'correct': None,
                'explanation': ''
            }
            if 'Mark for Review' in first_line:
                clean_q = re.sub(r'Mark for Review.*', '', first_line, flags=re.I).strip()
                if clean_q:
                    current_q['question_parts'].append(clean_q)
                state = 'options'
            else:
                current_q['question_parts'].append(first_line)
                state = 'question'
        elif current_q is not None:
            if state == 'question':
                if 'Mark for Review' in text or re.match(r'^\(\d+\)\s*Points', text, re.I):
                    state = 'options'
                else:
                    if not re.match(r'^Section\s+\d+', text, re.I) and 'Answer all questions' not in text:
                        current_q['question_parts'].append(text)
            elif state == 'options':
                if 'Mark for Review' in text or re.match(r'^\(\d+\)\s*Points', text, re.I):
                    continue
                if re.match(r'^Section\s+\d+', text, re.I) or 'Answer all questions' in text:
                    continue
                if 'Correct Answer' in text or 'Incorrect. Refer to' in text:
                    continue
                
                is_correct = '(*)' in text
                opt_clean = text.replace('(*)', '').strip()
                if opt_clean and len(opt_clean) < 500:
                    if is_correct and current_q['correct'] is None:
                        current_q['correct'] = len(current_q['options'])
                    current_q['options'].append(opt_clean)
                    
    if current_q and len(current_q['options']) >= 2 and current_q['correct'] is not None:
        questions.append(current_q)
        
    for q in questions:
        q['question'] = '\n'.join(q.pop('question_parts'))
        
    return questions

# 2. PARSER FOR INFRAEXAM (HTML, CSS, JS1, JS2, Linux, Python)
def parse_infraexam(url):
    try:
        content = fetch(url)
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []
        
    content = re.sub(r'<pgs-ad[^>]*>.*?</pgs-ad>', '', content, flags=re.DOTALL)
    items = re.findall(r'<h[23][^>]*>(.*?)</h[23]>(.*?)(?=<h[23]|\Z)', content, re.DOTALL)
    questions = []
    
    for q_head, q_body in items:
        ul_match = re.search(r'<ul[^>]*>(.*?)</ul>', q_body, re.DOTALL)
        if not ul_match:
            continue
            
        q_text = clean_text(q_head)
        if len(q_text) < 10 or 'Table of Contents' in q_text or 'Course Final' in q_text or ('Module' in q_text and len(q_text) < 28):
            continue
            
        options_raw = re.findall(r'<li[^>]*>(.*?)</li>', ul_match.group(1), re.DOTALL)
        options = []
        correct_idx = None
        explanation = ''
        
        for idx, opt in enumerate(options_raw):
            is_correct = bool(re.search(r'color:\s*#[c-f0-9]{6}', opt, re.IGNORECASE) or 'class="correct"' in opt or ('<strong>' in opt and '*' in opt))
            
            # Extract explanation if inline: "Explanation & Hint: ..."
            exp_match = re.search(r'Explanation(?: & Hint)?:?\s*(.*)', opt, re.IGNORECASE)
            if exp_match:
                explanation = clean_text(exp_match.group(1))
                opt = re.sub(r'Explanation(?: & Hint)?:?.*', '', opt, flags=re.IGNORECASE)
                
            clean_opt = clean_text(opt)
            clean_opt = re.sub(r'[\*]+$', '', clean_opt).strip()
            if clean_opt:
                if is_correct and correct_idx is None:
                    correct_idx = len(options)
                options.append(clean_opt)
                
        if len(options) >= 2 and correct_idx is not None:
            if 'refer to the exhibit' in q_text.lower() and not any(tag in q_body.lower() for tag in ['<pre', '<code']):
                continue
            questions.append({
                'question': q_text,
                'options': options,
                'correct': correct_idx,
                'explanation': explanation
            })
            
    return questions

# 3. PARSER FOR ITEXAMANSWERS (CCNA 1 ITN & CCNA 2 SRWE)
def parse_itexamanswers(url):
    try:
        content = fetch(url)
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return []
        
    pattern = r'<p>\s*<strong>\s*(\d+)\.\s+(.*?)</strong>\s*</p>\s*<ul>(.*?)</ul>(?:\s*<div class="message_box success">(.*?)</div>)?'
    matches = re.findall(pattern, content, re.DOTALL)
    questions = []
    
    for qnum, qtext, options_html, exp_html in matches:
        q_clean = clean_text(qtext)
        
        if 'refer to the exhibit' in q_clean.lower():
            continue
            
        opt_matches = re.findall(r'<li([^>]*)>(.*?)</li>', options_html, re.DOTALL)
        options = []
        correct_idx = None
        
        for idx, (li_attrs, opt_text) in enumerate(opt_matches):
            is_correct = 'correct_answer' in li_attrs or 'class="correct"' in li_attrs or bool(re.search(r'color:\s*#[c-f0-9]{6}', li_attrs, re.I))
            clean_opt = clean_text(opt_text)
            clean_opt = re.sub(r'[\*]+$', '', clean_opt).strip()
            if clean_opt:
                if is_correct and correct_idx is None:
                    correct_idx = len(options)
                options.append(clean_opt)
                
        clean_exp = clean_text(exp_html) if exp_html else ""
        if len(options) >= 2 and correct_idx is not None:
            questions.append({
                'source_num': int(qnum),
                'question': q_clean,
                'options': options,
                'correct': correct_idx,
                'explanation': clean_exp
            })
            
    return questions

def fetch_and_merge(urls, parser_fn):
    all_qs = []
    seen = set()
    for u in urls:
        qs = parser_fn(u)
        for q in qs:
            k = q['question'].strip().lower()
            if k not in seen:
                seen.add(k)
                all_qs.append(q)
    return all_qs

if __name__ == '__main__':
    print("Beginning extraction of all 10 certificates with multi-module question banks...")
    
    # 1. Oracle Database Design
    print("1. Fetching Oracle Database Design...")
    dd_urls = [
        'https://deniace.blogspot.com/2017/02/final-exam-database-design-oracle.html',
        'https://deniace.blogspot.com/2017/02/section-6-quiz-database-design-oracle.html',
        'https://deniace.blogspot.com/2017/02/section-7-quiz-database-design-oracle.html',
        'https://deniace.blogspot.com/2017/02/section-8-quiz-database-design-oracle.html',
        'https://deniace.blogspot.com/2017/02/section-9-quiz-database-design-oracle.html',
    ]
    all_dd = fetch_and_merge(dd_urls, parse_deniace)
    with open(os.path.join(OUTPUT_DIR, 'oracle_dd.json'), 'w', encoding='utf-8') as f:
        json.dump(all_dd, f, ensure_ascii=False, indent=2)
    print(f"  -> oracle_dd: {len(all_dd)} questions saved")

    # 2. Oracle SQL
    print("2. Fetching Oracle Database Programming with SQL...")
    sql_urls = [
        'https://deniace.blogspot.com/2017/02/final-exam-database-programming-with-sql.html',
        'https://deniace.blogspot.com/2017/02/midterm-exam-database-programming-with.html',
        'https://deniace.blogspot.com/2017/02/section-18-quiz-database-programming.html',
        'https://deniace.blogspot.com/2017/02/section-17-quiz-database-programming.html',
        'https://deniace.blogspot.com/2017/02/section-16-quiz-database-programming.html',
        'https://deniace.blogspot.com/2017/02/section-15-quiz-database-programming.html',
    ]
    all_sql = fetch_and_merge(sql_urls, parse_deniace)
    with open(os.path.join(OUTPUT_DIR, 'oracle_sql.json'), 'w', encoding='utf-8') as f:
        json.dump(all_sql, f, ensure_ascii=False, indent=2)
    print(f"  -> oracle_sql: {len(all_sql)} questions saved")

    # 3. HTML Essentials
    print("3. Fetching HTML Essentials...")
    html_urls = [
        'https://infraexam.com/html-essentials/html-essentials-course-final-exam-answers/',
        'https://infraexam.com/html-essentials/html-essentials-2-10-module-2-test-exam-answers/',
        'https://infraexam.com/html-essentials/html-essentials-3-9-module-3-test-answers/',
        'https://infraexam.com/html-essentials/html-essentials-4-8-module-4-test-answers/',
        'https://infraexam.com/html-essentials/html-essentials-5-8-module-5-test-answers/',
    ]
    all_html = fetch_and_merge(html_urls, parse_infraexam)
    with open(os.path.join(OUTPUT_DIR, 'html.json'), 'w', encoding='utf-8') as f:
        json.dump(all_html, f, ensure_ascii=False, indent=2)
    print(f"  -> html: {len(all_html)} questions saved")

    # 4. CSS Essentials
    print("4. Fetching CSS Essentials...")
    css_urls = [
        'https://infraexam.com/css-essentials/css-essentials-course-final-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-1-11-module-1-test-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-2-11-module-2-test-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-3-11-module-3-test-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-4-9-module-4-test-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-5-11-module-5-test-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-6-9-module-6-test-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-7-12-module-7-test-exam-answers/',
        'https://infraexam.com/css-essentials/css-essentials-8-6-module-8-test-exam-answers/',
    ]
    all_css = fetch_and_merge(css_urls, parse_infraexam)
    with open(os.path.join(OUTPUT_DIR, 'css.json'), 'w', encoding='utf-8') as f:
        json.dump(all_css, f, ensure_ascii=False, indent=2)
    print(f"  -> css: {len(all_css)} questions saved")

    # 5. JSE 1
    print("5. Fetching JavaScript Essentials 1...")
    js1_urls = [
        'https://infraexam.com/javascipt-essentials-1-jse/javascipt-essentials-1-jse-jse1-module-1-test-exam-answers/',
        'https://infraexam.com/javascipt-essentials-1-jse/javascipt-essentials-1-jse-jse1-module-2-test-exam-answers/',
        'https://infraexam.com/javascipt-essentials-1-jse/javascipt-essentials-1-jse-jse1-module-3-test-exam-answers/',
        'https://infraexam.com/javascipt-essentials-1-jse/javascipt-essentials-1-jse1-module-4-test-exam-answers-full-score-100/',
        'https://infraexam.com/javascipt-essentials-1-jse/javascript-essentials-1-jse1-module-5-test-exam-answers-full-score-100/',
        'https://infraexam.com/javascipt-essentials-1-jse/javascript-essentials-1-jse1-module-6-test-exam-answers-full-score-100/',
        'https://infraexam.com/javascipt-essentials-1-jse/javascript-essentials-1-jse1-final-test-exam-answers-full-score-100/',
    ]
    all_js1 = fetch_and_merge(js1_urls, parse_infraexam)
    with open(os.path.join(OUTPUT_DIR, 'js.json'), 'w', encoding='utf-8') as f:
        json.dump(all_js1, f, ensure_ascii=False, indent=2)
    print(f"  -> js: {len(all_js1)} questions saved")

    # 6. JSE 2
    print("6. Fetching JavaScript Essentials 2...")
    js2_urls = [
        'https://infraexam.com/javascript-essentials-2-jse2/javascript-essentials-2-course-completion-jse2-final-test-exam-answers/',
        'https://infraexam.com/javascript-essentials-2-jse2/javascript-essentials-2-jse2-module-1-classless-objects-module-1-test-exam-answers-full-100/',
        'https://infraexam.com/javascript-essentials-2-jse2/javascript-essentials-2-jse2-module-2-classes-and-class-based-approach-module-2-test-exam-answers-full-100/',
        'https://infraexam.com/javascript-essentials-2-jse2/jse2-module-3-built-in-objects-module-3-test-exam-answers/',
        'https://infraexam.com/javascript-essentials-2-jse2/jse2-module-4-advanced-function-usage-module-4-test-exam-answers/',
    ]
    all_js2 = fetch_and_merge(js2_urls, parse_infraexam)
    with open(os.path.join(OUTPUT_DIR, 'js2.json'), 'w', encoding='utf-8') as f:
        json.dump(all_js2, f, ensure_ascii=False, indent=2)
    print(f"  -> js2: {len(all_js2)} questions saved")

    # 7. NDG Linux Essentials
    print("7. Fetching NDG Linux Essentials...")
    linux_qs = parse_infraexam('https://infraexam.com/lpi/linux-essentials-2-21/final-comprehensive-m2-18-exam/')
    with open(os.path.join(OUTPUT_DIR, 'linux.json'), 'w', encoding='utf-8') as f:
        json.dump(linux_qs, f, ensure_ascii=False, indent=2)
    print(f"  -> linux: {len(linux_qs)} questions saved")

    # 8. CCNA 1 ITN
    print("8. Fetching CCNA 1 ITN...")
    itn_qs = parse_itexamanswers('https://itexamanswers.net/ccna-1-v7-0-final-exam-answers-full-introduction-to-networks.html')
    with open(os.path.join(OUTPUT_DIR, 'ccna_itn.json'), 'w', encoding='utf-8') as f:
        json.dump(itn_qs, f, ensure_ascii=False, indent=2)
    print(f"  -> ccna_itn: {len(itn_qs)} questions saved")

    # 9. CCNA 2 SRWE
    print("9. Fetching CCNA 2 SRWE...")
    srwe_qs = parse_itexamanswers('https://itexamanswers.net/ccna-2-v7-0-final-exam-answers-full-switching-routing-and-wireless-essentials.html')
    with open(os.path.join(OUTPUT_DIR, 'ccna_srwe.json'), 'w', encoding='utf-8') as f:
        json.dump(srwe_qs, f, ensure_ascii=False, indent=2)
    print(f"  -> ccna_srwe: {len(srwe_qs)} questions saved")

    # 10. Python Essentials 1
    print("10. Fetching Python Essentials 1...")
    py_urls = [
        'https://infraexam.com/python-institute/pe1-python-essentials-1-basics/pe1-python-essentials-1-part-1-summary-test/',
        'https://infraexam.com/python-institute/pe1-python-essentials-1-basics/pe1-python-essentials-1-module-1-test/',
        'https://infraexam.com/python-institute/pe1-python-essentials-1-basics/pe1-python-essentials-1-module-2-test/',
        'https://infraexam.com/python-institute/pe1-python-essentials-1-basics/pe1-python-essentials-1-module-3-test/',
        'https://infraexam.com/python-institute/pe1-python-essentials-1-basics/pe1-python-essentials-1-module-4-test/',
    ]
    all_pe1 = fetch_and_merge(py_urls, parse_infraexam)
    with open(os.path.join(OUTPUT_DIR, 'python.json'), 'w', encoding='utf-8') as f:
        json.dump(all_pe1, f, ensure_ascii=False, indent=2)
    print(f"  -> python: {len(all_pe1)} questions saved")
    
    print("\nALL 10 CERTIFICATES FETCHED SUCCESSFULLY!")
