import json
import re
from cert_compiler import clean_question_text, merge_broken_options

def assign_module(cert_id, qtext):
    ql = qtext.lower()
    
    if cert_id == 'oracle_dd':
        if any(w in ql for w in ['1nf', '2nf', '3nf', 'normal form', 'normalization', 'transitive', 'repeating']):
            return 'dd_m4'
        elif any(w in ql for w in ['subtype', 'supertype', 'arc', 'hierarchy', 'recursive', 'bar']):
            return 'dd_m3'
        elif any(w in ql for w in ['entity', 'attribute', 'relationship', 'uid', 'unique identifier', 'erd', 'cardinality', 'optionality', 'mandatory']):
            return 'dd_m2'
        elif any(w in ql for w in ['table', 'foreign key', 'primary key', 'column', 'physical', 'constraint', 'null']):
            return 'dd_m5'
        else:
            return 'dd_m1'
            
    elif cert_id == 'oracle_sql':
        if any(w in ql for w in ['create table', 'alter table', 'drop table', 'truncate', 'constraint', 'view', 'sequence', 'index']):
            return 'sql_m5'
        elif any(w in ql for w in ['insert', 'update', 'delete', 'merge', 'subquery', 'subqueries', 'commit', 'rollback']):
            return 'sql_m4'
        elif any(w in ql for w in ['join', 'cross join', 'natural join', 'outer join', 'inner join', 'group by', 'having', 'count', 'sum', 'avg']):
            return 'sql_m3'
        elif any(w in ql for w in ['where', 'order by', 'like', 'between', 'in', 'null', 'nvl', 'to_char', 'to_date', 'upper', 'lower', 'substr', 'round']):
            return 'sql_m2'
        else:
            return 'sql_m1'
            
    elif cert_id == 'html':
        if any(w in ql for w in ['semantic', 'header', 'footer', 'nav', 'article', 'section', 'aside', 'accessibility', 'aria']):
            return 'html_m5'
        elif any(w in ql for w in ['table', 'form', 'input', 'button', 'select', 'textarea', 'label', 'tr', 'td', 'th']):
            return 'html_m4'
        elif any(w in ql for w in ['img', 'image', 'audio', 'video', 'src', 'alt', 'href', 'link', 'anchor', '<a>']):
            return 'html_m3'
        elif any(w in ql for w in ['p', 'h1', 'h2', 'span', 'div', 'strong', 'em', 'b', 'i', 'list', 'ul', 'ol', 'li']):
            return 'html_m2'
        else:
            return 'html_m1'
            
    elif cert_id == 'css':
        if any(w in ql for w in ['flex', 'grid', 'media query', 'responsive', 'viewport', '@media', 'bootstrap']):
            return 'css_m5'
        elif any(w in ql for w in ['position', 'absolute', 'relative', 'fixed', 'sticky', 'float', 'clear', 'display', 'z-index']):
            return 'css_m4'
        elif any(w in ql for w in ['box model', 'margin', 'padding', 'border', 'width', 'height', 'font', 'color', 'background', 'text-']):
            return 'css_m3'
        elif any(w in ql for w in ['selector', 'cascade', 'specificity', 'class', 'id', 'pseudo', 'hover', 'active']):
            return 'css_m2'
        else:
            return 'css_m1'
            
    elif cert_id == 'js':
        if any(w in ql for w in ['function', 'return', 'parameter', 'argument', 'try', 'catch', 'throw', 'error', 'debugger']):
            return 'js_m6'
        elif any(w in ql for w in ['if', 'else', 'switch', 'for', 'while', 'do', 'break', 'continue', 'loop']):
            return 'js_m5'
        elif any(w in ql for w in ['array', 'object', 'push', 'pop', 'length', 'index', 'slice', 'splice']):
            return 'js_m4'
        elif any(w in ql for w in ['operator', '+', '-', '*', '/', '%', '==', '===', '!=', '!==', 'alert', 'prompt', 'confirm', 'console']):
            return 'js_m3'
        elif any(w in ql for w in ['variable', 'let', 'const', 'var', 'type', 'typeof', 'string', 'number', 'boolean', 'null', 'undefined']):
            return 'js_m2'
        else:
            return 'js_m1'
            
    elif cert_id == 'js2':
        if any(w in ql for w in ['async', 'await', 'promise', 'closure', 'callback', 'scope', 'iife', 'recursion', 'arrow']):
            return 'js2_m4'
        elif any(w in ql for w in ['regexp', 'regex', 'json', 'math', 'date', 'set', 'map', 'builtin']):
            return 'js2_m3'
        elif any(w in ql for w in ['class', 'constructor', 'extends', 'super', 'static', 'private', 'getter', 'setter', 'oop']):
            return 'js2_m2'
        else:
            return 'js2_m1'
            
    elif cert_id == 'linux':
        if any(w in ql for w in ['user', 'group', 'chmod', 'chown', 'permission', 'passwd', 'root', 'sudo', 'rwx', 'shadow']):
            return 'linux_m5'
        elif any(w in ql for w in ['process', 'ps', 'top', 'kill', 'hardware', 'dmesg', 'lscpu', 'network', 'ifconfig', 'ip', 'route']):
            return 'linux_m4'
        elif any(w in ql for w in ['grep', 'pipe', '|', 'redirect', '>', '>>', '<', 'script', 'bash', 'cut', 'sort', 'uniq', 'wc']):
            return 'linux_m3'
        elif any(w in ql for w in ['ls', 'cd', 'cp', 'mv', 'rm', 'mkdir', 'rmdir', 'touch', 'file', 'directory', 'path', 'pwd']):
            return 'linux_m2'
        else:
            return 'linux_m1'
            
    elif cert_id == 'ccna_itn':
        if any(w in ql for w in ['application', 'dns', 'dhcp', 'http', 'https', 'ftp', 'ssh', 'telnet', 'security', 'firewall']):
            return 'itn_m5'
        elif any(w in ql for w in ['transport', 'tcp', 'udp', 'port', 'segment', 'handshake', 'syn', 'ack', 'flow control']):
            return 'itn_m4'
        elif any(w in ql for w in ['ip', 'ipv4', 'ipv6', 'subnet', 'mask', 'prefix', 'routing', 'router', 'packet', 'icmp', 'ping']):
            return 'itn_m3'
        elif any(w in ql for w in ['ethernet', 'mac', 'switch', 'frame', 'physical', 'cable', 'fiber', 'copper', 'utp', 'duplex']):
            return 'itn_m2'
        else:
            return 'itn_m1'
            
    elif cert_id == 'ccna_srwe':
        if any(w in ql for w in ['security', 'attack', 'port security', 'macof', 'dai', 'dhcp snooping', 'acl', 'mitigation']):
            return 'srwe_m5'
        elif any(w in ql for w in ['route', 'routing', 'static', 'default route', 'floating', 'wlan', 'wireless', 'ap', 'wlc', 'ssid']):
            return 'srwe_m4'
        elif any(w in ql for w in ['dhcp', 'slaac', 'dhcpv6', 'fhrp', 'hsrp', 'vrrp', 'gateway']):
            return 'srwe_m3'
        elif any(w in ql for w in ['stp', 'spanning-tree', 'spanning tree', 'etherchannel', 'lacp', 'pagp', 'loop']):
            return 'srwe_m2'
        else:
            return 'srwe_m1'
            
    elif cert_id == 'python':
        if any(w in ql for w in ['function', 'def', 'return', 'tuple', 'dictionary', 'dict', 'parameter', 'argument', 'key']):
            return 'py_m4'
        elif any(w in ql for w in ['if', 'else', 'elif', 'for', 'while', 'loop', 'list', 'append', 'insert', 'slice']):
            return 'py_m3'
        elif any(w in ql for w in ['operator', '+', '-', '*', '//', '%', '**', 'print', 'input', 'sep', 'end']):
            return 'py_m2'
        else:
            return 'py_m1'
            
    return f"{cert_id}_m1"

print("Module assignment loaded.")
