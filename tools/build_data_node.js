const fs = require('fs');
const vm = require('vm');
const path = require('path');

const rootDir = 'c:/Users/cqeta/Documents/Certifikaty';
const backupFile = path.join(rootDir, 'tools/data_backup_with_questions.js');

console.log('Loading base structure from backup file...');
const rawCode = fs.readFileSync(backupFile, 'utf8');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(rawCode.replace(/const /g, 'var '), sandbox);

if (!sandbox.CERTIFICATE_CATEGORIES || !sandbox.CERTIFICATES_DATA) {
  console.error('Failed to extract base data structures from backup file');
  process.exit(1);
}

// 1. Load fresh HTML questions
console.log('Loading fresh HTML questions...');
const htmlPart1 = JSON.parse(fs.readFileSync(path.join(rootDir, 'tools/raw_data/html_01_20_fresh.json'), 'utf8'));
const htmlPart2 = JSON.parse(fs.readFileSync(path.join(rootDir, 'tools/raw_data/html_21_40_fresh.json'), 'utf8'));
const htmlAll = [...htmlPart1, ...htmlPart2];

htmlAll.forEach((q, idx) => {
  q.id = `html_q${String(idx + 1).padStart(2, '0')}`;
  if (!q.module || !q.module.startsWith('html_m')) {
    q.module = 'html_m1';
  }
});
console.log(`Total HTML questions: ${htmlAll.length}`);
sandbox.CERTIFICATES_DATA.html.questions = htmlAll;
sandbox.CERTIFICATES_DATA.html.examQuestionCount = 40;

// 2. Load fresh CSS questions
console.log('Loading fresh CSS questions...');
const cssPart1 = JSON.parse(fs.readFileSync(path.join(rootDir, 'tools/raw_data/css_01_17_fresh.json'), 'utf8'));
const cssPart2 = JSON.parse(fs.readFileSync(path.join(rootDir, 'tools/raw_data/css_18_34_fresh.json'), 'utf8'));
const cssPart3 = JSON.parse(fs.readFileSync(path.join(rootDir, 'tools/raw_data/css_35_50_fresh.json'), 'utf8'));
const cssAll = [...cssPart1, ...cssPart2, ...cssPart3];

cssAll.forEach((q, idx) => {
  q.id = `css_q${String(idx + 1).padStart(2, '0')}`;
  if (!q.module || !q.module.startsWith('css_m')) {
    q.module = 'css_m1';
  }
});
console.log(`Total CSS questions: ${cssAll.length}`);
sandbox.CERTIFICATES_DATA.css.questions = cssAll;
sandbox.CERTIFICATES_DATA.css.examQuestionCount = 35; // draws from 50 pool

// 3. Load fresh JS1 questions (if available)
const js1P1 = path.join(rootDir, 'tools/raw_data/js1_01_15_fresh.json');
const js1P2 = path.join(rootDir, 'tools/raw_data/js1_16_30_fresh.json');
if (fs.existsSync(js1P1) && fs.existsSync(js1P2)) {
  console.log('Loading fresh JS1 questions...');
  const p1 = JSON.parse(fs.readFileSync(js1P1, 'utf8'));
  const p2 = JSON.parse(fs.readFileSync(js1P2, 'utf8'));
  const js1All = [...p1, ...p2];
  js1All.forEach((q, idx) => {
    q.id = `js_q${String(idx + 1).padStart(2, '0')}`;
    if (!q.module || !q.module.startsWith('js_m')) {
      q.module = 'js_m1';
    }
  });
  console.log(`Total JS1 questions: ${js1All.length}`);
  sandbox.CERTIFICATES_DATA.js.questions = js1All;
  sandbox.CERTIFICATES_DATA.js.examQuestionCount = 30;
} else {
  sandbox.CERTIFICATES_DATA.js.questions = [];
}

// 4. Load fresh JS2 questions (if available)
const js2P1 = path.join(rootDir, 'tools/raw_data/js2_01_20_fresh.json');
const js2P2 = path.join(rootDir, 'tools/raw_data/js2_21_40_fresh.json');
if (fs.existsSync(js2P1) && fs.existsSync(js2P2)) {
  console.log('Loading fresh JS2 questions...');
  const p1 = JSON.parse(fs.readFileSync(js2P1, 'utf8'));
  const p2 = JSON.parse(fs.readFileSync(js2P2, 'utf8'));
  const js2All = [...p1, ...p2];
  js2All.forEach((q, idx) => {
    q.id = `js2_q${String(idx + 1).padStart(2, '0')}`;
    if (!q.module || !q.module.startsWith('js2_m')) {
      q.module = 'js2_m1';
    }
  });
  console.log(`Total JS2 questions: ${js2All.length}`);
  sandbox.CERTIFICATES_DATA.js2.questions = js2All;
  sandbox.CERTIFICATES_DATA.js2.examQuestionCount = 35;
} else {
  sandbox.CERTIFICATES_DATA.js2.questions = [];
}

// 5. Clear other courses awaiting screenshots
const otherCourses = ['devnet', 'ccna_itn', 'linux'];
for (const courseKey of otherCourses) {
  if (sandbox.CERTIFICATES_DATA[courseKey]) {
    sandbox.CERTIFICATES_DATA[courseKey].questions = [];
  }
}

// Generate new clean data.js
const header = `// IT Certifications Prep - 7 vybraných kurzů Cisco z otevřených záložek Brave\n` +
  `// Autentické certifikační otázky z Cisco NetAcad (HTML: 40, CSS: 50, JS1: 30, JS2: 40)\n` +
  `// Všechny otázky obsahují přesné zadání, pořadí možností, ověřenou správnou odpověď a detailní vysvětlení screenshotu.\n\n`;

const finalCode = header +
  `const CERTIFICATE_CATEGORIES = ${JSON.stringify(sandbox.CERTIFICATE_CATEGORIES, null, 2)};\n\n` +
  `const CERTIFICATES_DATA = ${JSON.stringify(sandbox.CERTIFICATES_DATA, null, 2)};\n`;

fs.writeFileSync(path.join(rootDir, 'data.js'), finalCode, 'utf8');
console.log('Successfully written data.js!');
