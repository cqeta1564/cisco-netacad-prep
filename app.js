/**
 * Cisco NetAcad Certification Prep - Core Application Engine
 */

class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sound_enabled') !== 'false';
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playTone(freq, type, duration, gainVal = 0.1) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio FX error:', e);
    }
  }

  click() {
    this.playTone(600, 'sine', 0.05, 0.04);
  }

  correct() {
    this.playTone(523.25, 'triangle', 0.1, 0.08); // C5
    setTimeout(() => this.playTone(659.25, 'triangle', 0.15, 0.08), 80); // E5
  }

  wrong() {
    this.playTone(260, 'sawtooth', 0.15, 0.05);
  }

  fanfare() {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.25, 0.1), idx * 120);
    });
  }
}

class NetAcadApp {
  constructor() {
    this.sound = new SoundFX();
    this.activeCert = 'html';
    this.activeMode = 'simulator'; // 'simulator', 'practice', 'flashcards', 'cheatsheet'
    
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { questionId: selectedIndex }
    this.flagged = new Set();
    
    // Exam timer
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.examStartTime = null;

    // Flashcards
    this.fcIndex = 0;
    this.fcFlipped = false;

    // Cheatsheets
    this.initCheatsheets();

    // DOM bindings
    this.bindEvents();
    this.applyTheme(localStorage.getItem('app_theme') || 'dark');
    this.updateSoundIcon();

    // Init with active cert
    this.loadCertificate(this.activeCert);
  }

  bindEvents() {
    // Theme toggle
    document.getElementById('themeToggleBtn').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      this.sound.click();
    });

    // Sound toggle
    document.getElementById('soundToggleBtn').addEventListener('click', () => {
      this.sound.enabled = !this.sound.enabled;
      localStorage.setItem('sound_enabled', this.sound.enabled);
      this.updateSoundIcon();
      if (this.sound.enabled) this.sound.click();
    });

    // Cert card tabs
    document.querySelectorAll('.cert-card-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const certId = tab.dataset.cert;
        if (certId !== this.activeCert) {
          this.sound.click();
          this.loadCertificate(certId);
        }
      });
    });

    // Mode tabs
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        this.sound.click();
        this.switchView(mode);
      });
    });

    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.sound.click();
        this.currentIndex--;
        this.renderQuestion();
      }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      if (this.currentIndex < this.currentQuestions.length - 1) {
        this.sound.click();
        this.currentIndex++;
        this.renderQuestion();
      }
    });

    // Flag question button
    document.getElementById('flagQuestionBtn').addEventListener('click', () => {
      this.sound.click();
      const q = this.currentQuestions[this.currentIndex];
      if (this.flagged.has(q.id)) {
        this.flagged.delete(q.id);
      } else {
        this.flagged.add(q.id);
      }
      this.updateFlagUI();
      this.renderGridMatrix();
    });

    // Finish Exam button
    document.getElementById('finishExamBtn').addEventListener('click', () => {
      this.confirmFinishExam();
    });

    // Toggle Matrix Drawer
    document.getElementById('toggleGridBtn').addEventListener('click', () => {
      this.sound.click();
      const drawer = document.getElementById('gridDrawer');
      drawer.style.display = drawer.style.display === 'none' ? 'block' : 'none';
    });

    // Module filter in practice mode
    document.getElementById('moduleFilterSelect').addEventListener('change', (e) => {
      this.sound.click();
      this.filterPracticeByModule(e.target.value);
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app_theme', theme);
    const icon = document.querySelector('#themeToggleBtn i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  updateSoundIcon() {
    const icon = document.querySelector('#soundToggleBtn i');
    if (icon) {
      icon.className = this.sound.enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }
  }

  loadCertificate(certId) {
    this.activeCert = certId;
    const cert = CERTIFICATES_DATA[certId];

    // Update active tab style
    document.querySelectorAll('.cert-card-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.cert === certId);
    });

    // Update current cert badge
    const badge = document.getElementById('currentCertBadge');
    badge.innerHTML = `<i class="${cert.icon}"></i> ${cert.badge}`;
    badge.style.color = cert.color;

    // Populate module filter select
    const select = document.getElementById('moduleFilterSelect');
    select.innerHTML = '<option value="all">Všechny moduly / témata</option>';
    cert.modules.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = m.name;
      select.appendChild(opt);
    });

    // Reset and start according to current mode
    this.switchView(this.activeMode, true);
  }

  switchView(mode, forceReset = false) {
    this.activeMode = mode;

    // Update buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));

    // Handle each mode
    if (mode === 'simulator') {
      document.getElementById('quizView').classList.add('active');
      document.getElementById('practiceModuleFilterWrap').style.display = 'none';
      document.getElementById('examTimerBox').style.display = 'flex';
      document.getElementById('finishExamBtn').style.display = 'inline-flex';
      if (forceReset || !this.currentQuestions.length) {
        this.startSimulator();
      } else {
        this.renderQuestion();
      }
    } else if (mode === 'practice') {
      document.getElementById('quizView').classList.add('active');
      document.getElementById('practiceModuleFilterWrap').style.display = 'block';
      document.getElementById('examTimerBox').style.display = 'none';
      document.getElementById('finishExamBtn').style.display = 'none';
      this.stopTimer();
      if (forceReset || !this.currentQuestions.length) {
        this.startPractice();
      } else {
        this.renderQuestion();
      }
    } else if (mode === 'flashcards') {
      document.getElementById('flashcardsView').classList.add('active');
      this.stopTimer();
      this.initFlashcards();
    } else if (mode === 'cheatsheet') {
      document.getElementById('cheatsheetView').classList.add('active');
      this.stopTimer();
      this.renderCheatsheet();
    }
  }

  /* ----------------------------------------------------
     SIMULATOR MODE
     ---------------------------------------------------- */
  startSimulator() {
    this.stopTimer();
    const cert = CERTIFICATES_DATA[this.activeCert];

    // Pick questions (shuffle and take up to 30 for real Cisco NetAcad length)
    const all = [...cert.questions];
    this.shuffleArray(all);
    const count = Math.min(30, all.length);
    this.currentQuestions = all.slice(0, count);

    this.currentIndex = 0;
    this.userAnswers = {};
    this.flagged.clear();

    // Timer setup
    this.timerSeconds = cert.timeLimit * 60;
    this.examStartTime = Date.now();
    this.startTimer();

    this.renderQuestion();
  }

  restartSimulator() {
    this.switchView('simulator', true);
  }

  startTimer() {
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timerSeconds--;
      this.updateTimerDisplay();

      if (this.timerSeconds <= 0) {
        this.stopTimer();
        alert('Časový limit zkoušky vypršel! Vaše odpovědi budou nyní vyhodnoceny.');
        this.finishExam();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const min = Math.floor(this.timerSeconds / 60);
    const sec = this.timerSeconds % 60;
    const str = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    const el = document.getElementById('timerDisplay');
    const box = document.getElementById('examTimerBox');
    if (el) el.textContent = str;

    if (box) {
      if (this.timerSeconds < 300) { // < 5 mins
        box.classList.add('warning');
      } else {
        box.classList.remove('warning');
      }
    }
  }

  confirmFinishExam() {
    const answeredCount = Object.keys(this.userAnswers).length;
    const total = this.currentQuestions.length;
    const unanswered = total - answeredCount;

    let msg = 'Opravdu chcete odevzdat zkoušku?';
    if (unanswered > 0) {
      msg = `Upozornění: Ještě jste nezodpověděli ${unanswered} z ${total} otázek!\n\nOpravdu chcete zkoušku ukončit a vyhodnotit?`;
    }

    if (confirm(msg)) {
      this.sound.click();
      this.finishExam();
    }
  }

  finishExam() {
    this.stopTimer();

    // Calculate score
    let correctCount = 0;
    this.currentQuestions.forEach(q => {
      if (this.userAnswers[q.id] === q.correct) {
        correctCount++;
      }
    });

    const total = this.currentQuestions.length;
    const scorePct = Math.round((correctCount / total) * 100);
    const cert = CERTIFICATES_DATA[this.activeCert];
    const passed = scorePct >= cert.passScore;

    if (passed) {
      this.sound.fanfare();
    } else {
      this.sound.wrong();
    }

    // Switch to results view
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('resultsView').classList.add('active');

    // Populate Results Screen
    const badgeWrap = document.getElementById('resultBadge');
    badgeWrap.className = `result-badge-wrap ${passed ? 'pass' : 'fail'}`;
    badgeWrap.innerHTML = passed ? '<i class="fas fa-award"></i>' : '<i class="fas fa-circle-xmark"></i>';

    const title = document.getElementById('resultTitle');
    const subtitle = document.getElementById('resultSubtitle');
    if (passed) {
      title.textContent = 'Gratulujeme! Zkouška složena!';
      subtitle.textContent = `Úspěšně jste splnili certifikační kritéria Cisco Networking Academy (hranice ${cert.passScore} %).`;
    } else {
      title.textContent = 'Zkouška nebyla úspěšně složena';
      subtitle.textContent = `K úspěšnému absolvování je nutné dosáhnout alespoň ${cert.passScore} %. Projděte si níže své chyby a zkuste to znovu!`;
    }

    document.getElementById('resScoreVal').textContent = `${scorePct} %`;
    document.getElementById('resCorrectVal').textContent = `${correctCount} / ${total}`;

    // Calculate time taken
    const elapsedSeconds = (cert.timeLimit * 60) - this.timerSeconds;
    const elMin = Math.floor(elapsedSeconds / 60);
    const elSec = elapsedSeconds % 60;
    document.getElementById('resTimeVal').textContent = `${elMin}m ${elSec}s`;

    const statusVal = document.getElementById('resStatusVal');
    statusVal.textContent = passed ? 'PASSED' : 'FAILED';
    statusVal.style.color = passed ? '#10b981' : '#ef4444';

    // Populate Detailed Review List
    this.renderReviewList();
  }

  renderReviewList() {
    const list = document.getElementById('reviewList');
    list.innerHTML = '';

    this.currentQuestions.forEach((q, idx) => {
      const userPick = this.userAnswers[q.id];
      const isCorrect = userPick === q.correct;

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`;

      let codeHtml = q.code ? `<div class="code-block" style="margin: 8px 0; font-size: 0.85rem;">${this.escapeHtml(q.code)}</div>` : '';

      const userText = userPick !== undefined ? this.escapeHtml(q.options[userPick]) : '<em>Nezodpovězeno</em>';
      const correctText = this.escapeHtml(q.options[q.correct]);
      const questionText = this.escapeHtml(q.question);
      const explanationText = this.escapeHtml(q.explanation);

      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 700; font-size: 0.9rem; color: ${isCorrect ? '#10b981' : '#ef4444'};">
            Otázka ${idx + 1} &bull; ${isCorrect ? '<i class="fas fa-check"></i> Správně' : '<i class="fas fa-times"></i> Špatně'}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${this.escapeHtml(this.getModuleName(q.module))}</span>
        </div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: 0.95rem;">${questionText}</p>
        ${codeHtml}
        <div style="font-size: 0.88rem; margin-bottom: 8px; line-height: 1.6;">
          <div><strong>Vaše odpověď:</strong> <span style="color: ${isCorrect ? '#10b981' : '#ef4444'}; font-family: monospace; background: rgba(0,0,0,0.25); padding: 2px 6px; border-radius: 4px;">${userText}</span></div>
          ${!isCorrect ? `<div style="margin-top: 4px;"><strong>Správná odpověď:</strong> <span style="color: #10b981; font-family: monospace; background: rgba(16, 185, 129, 0.15); padding: 2px 6px; border-radius: 4px;">${correctText}</span></div>` : ''}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); background: rgba(0,0,0,0.2); padding: 10px 14px; border-radius: 6px; line-height: 1.55; border-left: 3px solid #38bdf8;">
          <strong style="color: #38bdf8;">Vysvětlení:</strong> ${explanationText}
        </div>
      `;

      list.appendChild(item);
    });
  }

  reviewMistakesOnly() {
    const mistakes = this.currentQuestions.filter(q => this.userAnswers[q.id] !== q.correct);
    if (!mistakes.length) {
      alert('V této zkoušce jste neměli žádnou chybu! Skvělá práce!');
      return;
    }
    this.currentQuestions = mistakes;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flagged.clear();
    this.switchView('practice');
  }

  /* ----------------------------------------------------
     PRACTICE MODE
     ---------------------------------------------------- */
  startPractice(moduleId = 'all') {
    const cert = CERTIFICATES_DATA[this.activeCert];
    let list = [...cert.questions];

    if (moduleId !== 'all') {
      list = list.filter(q => q.module === moduleId);
    }

    this.currentQuestions = list;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flagged.clear();
    this.renderQuestion();
  }

  filterPracticeByModule(moduleId) {
    this.startPractice(moduleId);
  }

  /* ----------------------------------------------------
     QUESTION RENDERING ENGINE
     ---------------------------------------------------- */
  renderQuestion() {
    if (!this.currentQuestions.length) return;
    const q = this.currentQuestions[this.currentIndex];

    // Counter & Progress
    const total = this.currentQuestions.length;
    document.getElementById('qCounterDisplay').textContent = `Otázka ${this.currentIndex + 1} / ${total}`;
    const pct = Math.round(((this.currentIndex + 1) / total) * 100);
    document.getElementById('examProgressBar').style.width = `${pct}%`;

    // Module badge
    document.getElementById('qModuleBadge').textContent = this.getModuleName(q.module);

    // Text & code
    document.getElementById('qText').textContent = q.question;
    const codeBlock = document.getElementById('qCodeBlock');
    if (q.code) {
      codeBlock.textContent = q.code;
      codeBlock.style.display = 'block';
    } else {
      codeBlock.style.display = 'none';
    }

    // Flag UI
    this.updateFlagUI();

    // Options
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    const isPractice = this.activeMode === 'practice';
    const hasAnswered = this.userAnswers[q.id] !== undefined;

    q.options.forEach((optText, optIdx) => {
      const optEl = document.createElement('div');
      optEl.className = 'option-item';

      if (this.userAnswers[q.id] === optIdx) {
        optEl.classList.add('selected');
      }

      // If in practice mode and answered, reveal right/wrong classes
      if (isPractice && hasAnswered) {
        optEl.classList.add('locked');
        if (optIdx === q.correct) {
          optEl.classList.add('correct');
        } else if (optIdx === this.userAnswers[q.id]) {
          optEl.classList.add('incorrect');
        }
      }

      optEl.innerHTML = `
        <div class="option-radio"></div>
        <div class="option-text">${this.escapeHtml(optText)}</div>
      `;

      optEl.addEventListener('click', () => {
        this.selectOption(optIdx);
      });

      container.appendChild(optEl);
    });

    // Explanation Box (Shown in practice mode if answered)
    const expBox = document.getElementById('explanationBox');
    const expText = document.getElementById('explanationText');
    if (isPractice && hasAnswered) {
      expText.textContent = q.explanation;
      expBox.classList.add('show');
    } else {
      expBox.classList.remove('show');
    }

    // Nav buttons enable/disable
    document.getElementById('prevBtn').disabled = (this.currentIndex === 0);
    document.getElementById('nextBtn').disabled = (this.currentIndex === total - 1);

    // Render matrix
    this.renderGridMatrix();
  }

  selectOption(optIdx) {
    const q = this.currentQuestions[this.currentIndex];

    // In practice mode, don't allow changing answer once answered
    if (this.activeMode === 'practice' && this.userAnswers[q.id] !== undefined) {
      return;
    }

    this.userAnswers[q.id] = optIdx;

    if (this.activeMode === 'practice') {
      if (optIdx === q.correct) {
        this.sound.correct();
      } else {
        this.sound.wrong();
      }
    } else {
      this.sound.click();
    }

    this.renderQuestion();
  }

  updateFlagUI() {
    const q = this.currentQuestions[this.currentIndex];
    const btn = document.getElementById('flagQuestionBtn');
    const text = document.getElementById('flagBtnText');
    const isFlagged = this.flagged.has(q.id);

    btn.classList.toggle('flagged', isFlagged);
    text.textContent = isFlagged ? 'Označeno' : 'Označit';
    btn.querySelector('i').className = isFlagged ? 'fas fa-flag' : 'far fa-flag';
  }

  renderGridMatrix() {
    const matrix = document.getElementById('gridMatrix');
    matrix.innerHTML = '';

    this.currentQuestions.forEach((q, idx) => {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.textContent = idx + 1;

      if (idx === this.currentIndex) {
        cell.classList.add('current');
      }

      if (this.userAnswers[q.id] !== undefined) {
        cell.classList.add('answered');
      }

      if (this.flagged.has(q.id)) {
        cell.classList.add('flagged');
      }

      cell.addEventListener('click', () => {
        this.sound.click();
        this.currentIndex = idx;
        this.renderQuestion();
      });

      matrix.appendChild(cell);
    });
  }

  /* ----------------------------------------------------
     FLASHCARDS MODE
     ---------------------------------------------------- */
  initFlashcards() {
    const cert = CERTIFICATES_DATA[this.activeCert];
    this.currentQuestions = [...cert.questions];
    this.shuffleArray(this.currentQuestions);
    this.fcIndex = 0;
    this.fcFlipped = false;
    this.renderFlashcard();
  }

  flipFlashcard() {
    this.sound.click();
    const card = document.getElementById('flashcardElement');
    this.fcFlipped = !this.fcFlipped;
    card.classList.toggle('flipped', this.fcFlipped);
  }

  renderFlashcard() {
    const card = document.getElementById('flashcardElement');
    this.fcFlipped = false;
    card.classList.remove('flipped');

    const q = this.currentQuestions[this.fcIndex];
    const total = this.currentQuestions.length;

    document.getElementById('fcCounter').textContent = `${this.fcIndex + 1} / ${total}`;
    document.getElementById('fcModuleBadge').textContent = this.getModuleName(q.module);
    document.getElementById('fcQuestionText').textContent = q.question;

    const codeBlock = document.getElementById('fcCodeBlock');
    if (q.code) {
      codeBlock.textContent = q.code;
      codeBlock.style.display = 'block';
    } else {
      codeBlock.style.display = 'none';
    }

    document.getElementById('fcAnswerText').textContent = q.options[q.correct];
    document.getElementById('fcExplanationText').textContent = q.explanation;
  }

  nextFlashcard() {
    if (this.fcIndex < this.currentQuestions.length - 1) {
      this.sound.click();
      this.fcIndex++;
      this.renderFlashcard();
    }
  }

  prevFlashcard() {
    if (this.fcIndex > 0) {
      this.sound.click();
      this.fcIndex--;
      this.renderFlashcard();
    }
  }

  /* ----------------------------------------------------
     CHEATSHEET MODE
     ---------------------------------------------------- */
  initCheatsheets() {
    this.cheats = {
      html: [
        {
          title: "Základní kostra HTML5 dokumentu",
          rows: [
            ["<!DOCTYPE html>", "Deklarace typu dokumentu pro standardní HTML5 režim"],
            ["<html lang=\"en\">", "Kořenový (root) element s uvedením jazyka obsahu"],
            ["<head>", "Obsahuje metadata, <title>, odkaz na styly a skripty"],
            ["<meta charset=\"UTF-8\">", "Definuje kódování znaků UTF-8 (čeština, diakritika)"],
            ["<title>", "Název stránky zobrazený v záložce prohlížeče a ve vyhledávačích"],
            ["<body>", "Obsahuje veškerý viditelný obsah vykreslený v prohlížeči"]
          ]
        },
        {
          title: "Prázdné (Void) elementy bez uzavíracího tagu",
          rows: [
            ["<img>", "Vkládání obrázků (vyžaduje atributy src a alt)"],
            ["<br>", "Jednoduchý řádkový zlom uvnitř textu"],
            ["<hr>", "Vodorovná dělicí čára / tematický předěl"],
            ["<input>", "Formulářové vstupní pole (text, checkbox, radio...)"],
            ["<meta>", "Metadata v hlavičce <head>"],
            ["<link>", "Připojení externích stylů v hlavičce <head>"]
          ]
        },
        {
          title: "Formulářové prvky a atributy",
          rows: [
            ["action=\"...\"", "URL serverového skriptu, který zpracuje odeslaná data"],
            ["method=\"POST|GET\"", "HTTP metoda odeslání (POST pro citlivá/velká data, GET pro vyhledávání)"],
            ["<label for=\"id\">", "Propojení popisku s formulářovým prvkem podle jeho ID"],
            ["required", "Povinné pole — zamezí odeslání prázdného formuláře"],
            ["placeholder=\"...\"", "Nápovědný text, který zmizí při zahájení psaní"],
            ["<fieldset> a <legend>", "Seskupení formulářových prvků s rámečkem a nadpisem"]
          ]
        },
        {
          title: "Sémantické struktury HTML5",
          rows: [
            ["<nav>", "Významné navigační menu odkazů"],
            ["<article>", "Nezávislý obsah s vlastní hodnotou (článek, post, komentář)"],
            ["<section>", "Tematická kapitola / sekce dokumentu"],
            ["<aside>", "Nepřímo související obsah (postranní panel, vysvětlivky)"],
            ["<header> / <footer>", "Hlavička / patička celé stránky nebo konkrétní sekce"]
          ]
        }
      ],

      css: [
        {
          title: "CSS Box Model (Zevnitř ven)",
          rows: [
            ["Content", "Vlastní obsah (text, obrázek) definovaný šířkou a výškou"],
            ["Padding", "Vnitřní odsazení mezi obsahem a rámečkem"],
            ["Border", "Rámeček obklopující obsah a padding"],
            ["Margin", "Vnější okraj oddělující element od sousedních prvků"],
            ["box-sizing: border-box;", "Šířka a výška zahrnuje i padding a border (element se neroztahuje)"]
          ]
        },
        {
          title: "Hierarchie specificity selektorů",
          rows: [
            ["!important", "Přebíjí všechna běžná pravidla kaskády"],
            ["Inline styl (style=\"...\")", "Nejvyšší specificita mezi běžnými styly (1,0,0,0)"],
            ["ID selektor (#header)", "Specificita (0,1,0,0) — cíl na unikátní element"],
            ["Třída, pseudotřída (.btn, :hover)", "Specificita (0,0,1,0)"],
            ["Element, pseudoelement (p, h1, ::before)", "Základní specificita (0,0,0,1)"],
            ["Univerzální selektor (*)", "Nulová specificita (0,0,0,0)"]
          ]
        },
        {
          title: "Hodnoty vlastnosti position",
          rows: [
            ["static", "Výchozí hodnota — běžný tok dokumentu, ignoruje top/left/z-index"],
            ["relative", "Posunutí vůči své původní pozici v toku dokumentu"],
            ["absolute", "Vyjmutí z toku; pozicováno vůči nejbližšímu ne-statickému předkovi"],
            ["fixed", "Vyjmutí z toku; fixováno vůči oknu prohlížeče (viewportu) při rolování"],
            ["sticky", "Přepíná mezi relative a fixed na základě pozice rolování"]
          ]
        },
        {
          title: "Základy CSS Flexboxu",
          rows: [
            ["display: flex;", "Přemění element na flexbox kontejner"],
            ["flex-direction", "Určuje směr hlavní osy (row, column, row-reverse, column-reverse)"],
            ["justify-content", "Zarovnání položek podél HLAVNÍ osy (center, space-between...)"],
            ["align-items", "Zarovnání položek podél PŘÍČNÉ osy (center, stretch, flex-start...)"],
            ["gap", "Moderní nastavení mezer mezi flex (i grid) položkami"]
          ]
        }
      ],

      js: [
        {
          title: "Záludnosti operátoru typeof v JavaScriptu",
          rows: [
            ["typeof 42 / 3.14", "\"number\" — všechny číselné hodnoty v JS mají typ number"],
            ["typeof NaN", "\"number\" — Not-a-Number je také typu number!"],
            ["typeof 1 / 0 (Infinity)", "\"number\" — dělení nulou vrací Infinity (typ number)"],
            ["typeof null", "\"object\" — historická chyba v implementaci JS z roku 1995"],
            ["typeof undefined", "\"undefined\" — proměnná bez přiřazené hodnoty"],
            ["typeof [1, 2, 3]", "\"object\" — pole jsou v JS objekty (použijte Array.isArray())"],
            ["typeof function() {}", "\"function\" — funkce mají speciální typ function"]
          ]
        },
        {
          title: "Přetypování a Falsy hodnoty",
          rows: [
            ["Falsy hodnoty", "false, 0, \"\" (prázdný string), null, undefined, NaN, 0n"],
            ["Truth hodnoty", "Vše ostatní, včetně \"0\", \"false\", [] (prázdné pole), {}"],
            ["Number(null)", "0 (převede se na nulu)"],
            ["Number(undefined)", "NaN (nemá numerický ekvivalent)"],
            ["\"20\" + 10", "\"2010\" — operátor + provádí konkatenaci řetězců"],
            ["\"20\" - 10", "10 — operátor - nutí převod na číslo"],
            ["true + true", "2 — true se převede na 1 (1 + 1 = 2)"]
          ]
        },
        {
          title: "Cykly a řízení toku",
          rows: [
            ["do ... while", "Post-test cyklus: podmínka se testuje AŽ PO proběhnutí těla (min. 1x)"],
            ["while / for", "Pre-test cykly: podmínka se testuje PŘED každou iterací"],
            ["for ... in", "Prochází názvy vlastností (klíče) objektu"],
            ["for ... of", "Prochází hodnoty iterovatelných struktur (pole, řetězce, sety)"],
            ["switch (x)", "Porovnává hodnoty striktní rovností (===) a bez break nastane fall-through"]
          ]
        },
        {
          title: "Proměnné, Scope & Ladění",
          rows: [
            ["let vs const", "Obě mají blokový scope; const zakazuje znovupřiřazení reference"],
            ["\"use strict\";", "Striktní režim — zakazuje zápis do nedeklarovaných proměnných (ReferenceError)"],
            ["Variable Shadowing", "Vnitřní lokální proměnná zastíní vnější proměnnou stejného jména"],
            ["debugger;", "Programový breakpoint zastavující běh v DevTools"],
            ["try ... catch ... finally", "Blok finally se vykoná VŽDY i v případě vyhozené výjimky či returnu"]
          ]
        }
      ]
    };
  }

  renderCheatsheet() {
    const cert = CERTIFICATES_DATA[this.activeCert];
    document.getElementById('cheatsheetTitle').textContent = `Oficiální tahák: ${cert.title}`;

    const container = document.getElementById('cheatsheetContainer');
    container.innerHTML = '';

    const tables = this.cheats[this.activeCert] || [];
    tables.forEach(t => {
      const card = document.createElement('div');
      card.className = 'cheat-card';

      let rowsHtml = t.rows.map(([c1, c2]) => `
        <tr>
          <td><code>${this.escapeHtml(c1)}</code></td>
          <td>${this.escapeHtml(c2)}</td>
        </tr>
      `).join('');

      card.innerHTML = `
        <h4><i class="fas fa-bookmark"></i> ${t.title}</h4>
        <table class="cheat-table">
          <thead>
            <tr>
              <th>Syntaxe / Kód</th>
              <th>Pravidlo / Význam</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      `;

      container.appendChild(card);
    });
  }

  /* ----------------------------------------------------
     HELPERS
     ---------------------------------------------------- */
  getModuleName(modId) {
    const cert = CERTIFICATES_DATA[this.activeCert];
    const m = cert.modules.find(x => x.id === modId);
    return m ? m.name : modId;
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Global instance initialization on load
let app = null;
window.addEventListener('DOMContentLoaded', () => {
  app = new NetAcadApp();
});
