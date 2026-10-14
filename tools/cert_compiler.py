import json
import re

def clean_opt_text(opt):
    opt = re.sub(r'Explanation(?: & Hint)?:?.*', '', opt, flags=re.IGNORECASE)
    opt = re.sub(r'Let[’\']s analyze the code.*', '', opt, flags=re.IGNORECASE)
    opt = re.sub(r'In JavaScript, complex data types.*', '', opt, flags=re.IGNORECASE)
    opt = re.sub(r'Entering [“\']about:blank[”\'].*', '', opt, flags=re.IGNORECASE)
    opt = re.sub(r'[\*]+$', '', opt)
    opt = re.sub(r'^\([a-z0-9\s,]+\)', '', opt, flags=re.IGNORECASE)
    return opt.strip()

def merge_broken_options(raw_options, raw_correct):
    # Some SQL options got split across lines: e.g. "ALTER employee TABLE" and "MODIFY COLUMN..."
    # Let's detect if an option is a fragment of the previous one
    merged = []
    correct_idx = raw_correct
    
    i = 0
    while i < len(raw_options):
        cur = clean_opt_text(raw_options[i])
        if not cur or cur.lower() in ['choose all correct answers', 'choose two', 'select two', 'mark for review', '(choose all correct answers)']:
            if correct_idx is not None and i < correct_idx:
                correct_idx -= 1
            i += 1
            continue
            
        # Check if next line is continuation
        if i + 1 < len(raw_options):
            nxt = clean_opt_text(raw_options[i+1])
            if re.match(r'^(?:MODIFY|ADD|WHERE|SET|FROM|ORDER BY|GROUP BY|HAVING|VALUES|REPLACE|INTO|COLUMN)\b', nxt, re.I):
                cur = f"{cur} {nxt}"
                if correct_idx == i + 1:
                    correct_idx = i
                elif correct_idx is not None and correct_idx > i + 1:
                    correct_idx -= 1
                i += 1
                
        merged.append(cur)
        i += 1
        
    return merged, correct_idx

def clean_question_text(qtext):
    # remove leading numbers like "1. ", "45. "
    qtext = re.sub(r'^\d+\.\s*', '', qtext).strip()
    # clean multiple spaces
    qtext = re.sub(r'[ \t]+', ' ', qtext)
    # clean "Mark for Review"
    qtext = re.sub(r'Mark for Review.*', '', qtext, flags=re.I).strip()
    return qtext

print("cert_compiler helper loaded.")
