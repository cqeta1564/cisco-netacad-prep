import json
import re
from module_mapper import assign_module

# Load cert metadata
with open('cert_metadata.json', 'r', encoding='utf-8') as f:
    CERT_META = json.load(f)

# Load raw authentic files
def load_raw(cert_id):
    with open(f'authentic_raw/{cert_id}.json', 'r', encoding='utf-8') as f:
        return json.load(f)

print("build_authentic_database template ready.")
