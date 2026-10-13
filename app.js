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

    // User Profile & Statistics
    this.initUser();

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

    // User Profile Pill in Navbar
    const userPill = document.getElementById('userPillBtn');
    if (userPill) {
      userPill.addEventListener('click', () => {
        this.sound.click();
        this.switchView('stats');
      });
    }

    // Nickname Modal triggers
    const editNickBtn = document.getElementById('editNicknameBtn');
    if (editNickBtn) {
      editNickBtn.addEventListener('click', () => this.openNicknameModal());
    }

    const closeNickBtn = document.getElementById('closeNicknameModalBtn');
    if (closeNickBtn) {
      closeNickBtn.addEventListener('click', () => this.closeNicknameModal());
    }

    const cancelNickBtn = document.getElementById('cancelNicknameBtn');
    if (cancelNickBtn) {
      cancelNickBtn.addEventListener('click', () => this.closeNicknameModal());
    }

    const saveNickBtn = document.getElementById('saveNicknameBtn');
    if (saveNickBtn) {
      saveNickBtn.addEventListener('click', () => this.saveNicknameFromModal());
    }

    const nickInput = document.getElementById('nicknameInput');
    if (nickInput) {
      nickInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.saveNicknameFromModal();
        }
      });
    }

    const nickModal = document.getElementById('nicknameModal');
    if (nickModal) {
      nickModal.addEventListener('click', (e) => {
        if (e.target === nickModal) {
          this.closeNicknameModal();
        }
      });
    }

    // Reset stats button
    const resetStatsBtn = document.getElementById('resetStatsBtn');
    if (resetStatsBtn) {
      resetStatsBtn.addEventListener('click', () => this.resetUserStats());
    }

    // Stats Sub-tabs
    document.querySelectorAll('.stats-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const subtab = btn.dataset.subtab;
        this.switchStatsSubtab(subtab);
        this.sound.click();
      });
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

    // Populate practice filters & live stats
    this.updatePracticeFilterDropdown();
    this.updatePracticeLiveStats();

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
      this.updatePracticeFilterDropdown();
      this.updatePracticeLiveStats();
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
    } else if (mode === 'stats') {
      document.getElementById('statsView').classList.add('active');
      this.stopTimer();
      this.renderStatsView();
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
      subtitle.textContent = `Úspěšně jste splnili certifikační kritéria pro ${cert.title} (hranice ${cert.passScore} %).`;
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

    // Record into user statistics & cookies
    this.recordExamResult(scorePct, correctCount, total, elapsedSeconds, passed);

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
  startPractice(filterMode = 'all') {
    const cert = CERTIFICATES_DATA[this.activeCert];
    let list = [...cert.questions];
    const stats = this.getUserStats();
    const pQuestions = stats.practice?.questions || {};

    if (filterMode === 'mistakes') {
      list = list.filter(q => pQuestions[q.id] && pQuestions[q.id].lastResult === false);
      if (!list.length) {
        alert('V tomto certifikátu nemáte žádné evidované chybné otázky!');
        filterMode = 'all';
        list = [...cert.questions];
      }
    } else if (filterMode === 'unseen') {
      list = list.filter(q => !pQuestions[q.id]);
      if (!list.length) {
        alert('V tomto certifikátu jste již procvičili všechny otázky!');
        filterMode = 'all';
        list = [...cert.questions];
      }
    } else if (filterMode !== 'all') {
      list = list.filter(q => q.module === filterMode);
    }

    this.practiceFilterMode = filterMode;
    this.currentQuestions = list;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flagged.clear();
    this.updatePracticeLiveStats();
    this.renderQuestion();
  }

  filterPracticeByModule(filterMode) {
    this.startPractice(filterMode);
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
      const isCorrect = (optIdx === q.correct);
      const stats = this.getUserStats();
      
      if (!stats.practice) {
        stats.practice = { totalAnswered: 0, totalCorrect: 0, questions: {} };
      }
      if (!stats.practice.questions) {
        stats.practice.questions = {};
      }

      stats.practice.totalAnswered = (stats.practice.totalAnswered || 0) + 1;
      if (isCorrect) {
        stats.practice.totalCorrect = (stats.practice.totalCorrect || 0) + 1;
        this.sound.correct();
      } else {
        this.sound.wrong();
      }

      const prev = stats.practice.questions[q.id] || { answered: 0, correct: 0 };
      stats.practice.questions[q.id] = {
        certId: this.activeCert,
        moduleId: q.module,
        answered: prev.answered + 1,
        correct: prev.correct + (isCorrect ? 1 : 0),
        lastResult: isCorrect,
        lastDate: new Date().toISOString()
      };

      this.saveUserStats(stats);
      this.updatePracticeLiveStats();
      this.updatePracticeFilterDropdown();
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
      ],

      oracle_dd: [
        {
          title: "ERD Konvence & Entity / Atributy",
          rows: [
            ["# (křížek)", "Unique Identifier (UID) — unikátní primární identifikátor entity"],
            ["* (hvězdička)", "Mandatory attribute — povinný atribut (nesmí obsahovat NULL)"],
            ["o (kolečko)", "Optional attribute — volitelný atribut (může obsahovat NULL)"],
            ["Entity naming", "Název entity je vždy v jednotném čísle (např. EMPLOYEE, nikoliv EMPLOYEES)"],
            ["Volatile attribute", "Atribut, jehož hodnota se v čase mění (např. Age, Status) vs Nonvolatile (Birth_Date)"]
          ]
        },
        {
          title: "Pravidla normalizace databáze (1NF, 2NF, 3NF)",
          rows: [
            ["1NF (První normální forma)", "Všechny atributy jsou atomické (žádné opakující se skupiny, multi-hodnoty ani složené atributy)"],
            ["2NF (Druhá normální forma)", "Je v 1NF a žádný neklíčový atribut není částečně závislý na složeném primárním klíči"],
            ["3NF (Třetí normální forma)", "Je ve 2NF a neexistují žádné tranzitivní závislosti (neklíčový atribut nezávisí na jiném neklíčovém)"],
            ["Porušení 3NF", "Ukládání odvozených kalkulací (např. Total_Price = Price * Qty) přímo do atributu tabulky"]
          ]
        },
        {
          title: "Subtypy a Supertypy",
          rows: [
            ["Exhaustive rule", "Každá instance supertypu MUSÍ patřit do právě jednoho subtypu (pokrývá všechny možnosti)"],
            ["Mutually Exclusive", "Instance supertypu smí patřit MAXIMÁLNĚ do jednoho subtypu současně (žádné překryvy)"],
            ["Dědičnost (Inheritance)", "Subtypy automaticky dědí všechny atributy a vztahy svého rodičovského supertypu"]
          ]
        },
        {
          title: "Transformace ERD do Relačního modelu",
          rows: [
            ["1:M Relationship", "Cizí klíč (Foreign Key) se umisťuje do relační tabulky na straně 'MANY' (M)"],
            ["M:M Relationship", "Nelze přímo reprezentovat — rozkládá se na 2 vztahy 1:M přes vazební (Intersection) tabulku"],
            ["ON DELETE CASCADE", "Při smazání řádku v rodičovské tabulce se automaticky smažou navázané řádky v potomkovi"],
            ["ON DELETE SET NULL", "Při smazání rodičovského řádku se hodnota FK v potomkovské tabulce nastaví na NULL"]
          ]
        }
      ],

      oracle_sql: [
        {
          title: "Klíčové SQL Příkazy & Operátory",
          rows: [
            ["NVL(expr1, expr2)", "Pokud expr1 je NULL, vrátí expr2, jinak expr1 (obě musí mít kompatibilní datový typ)"],
            ["NVL2(expr1, expr2, expr3)", "Pokud expr1 NENÍ NULL vrací expr2; pokud expr1 JE NULL vrací expr3"],
            ["LIKE '%A_'", "% zastupuje libovolný počet znaků (i 0), _ (podtržítko) zastupuje právě jeden znak"],
            ["IN (v1, v2, ...)", "Vyhodnocuje členství v množině hodnot (ekvivalent série OR podmínek)"],
            ["BETWEEN a AND b", "Inkluzivní rozsah (hodnoty 'a' i 'b' jsou do filtru zahrnuty)"],
            ["NULL operátory", "IS NULL a IS NOT NULL (porovnání col = NULL vždy vyhodnotí UNKNOWN/false!)"]
          ]
        },
        {
          title: "Agregace a seskupování dat (GROUP BY & HAVING)",
          rows: [
            ["COUNT(*) vs COUNT(col)", "COUNT(*) započítává všechny řádky včetně NULL; COUNT(col) řádky s NULL ignoruje"],
            ["Pravidlo GROUP BY", "Všechny sloupce v SELECT klauzuli mimo agregační funkce MUSÍ být v GROUP BY"],
            ["HAVING vs WHERE", "WHERE filtruje jednotlivé řádky před agregací; HAVING filtruje celé skupiny po agregaci"],
            ["ROLLUP(a, b)", "Generuje hierarchické mezisoučty (subtotals) a celkový součet (grand total)"],
            ["DISTINCT", "Odstraňuje duplicitní řádky z výsledné sady"]
          ]
        },
        {
          title: "ANSI SQL Spojování tabulek (JOINs)",
          rows: [
            ["NATURAL JOIN", "Automatické spojení podle všech sloupců se stejným názvem i typem (nesmí mít prefix tabulky!)"],
            ["JOIN ... USING (col)", "Spojení podle specifikovaného společného sloupce (tento sloupec nesmí mít prefix!)"],
            ["JOIN ... ON (podmínka)", "Univerzální spojení s libovolnou podmínkou (sloupce mohou mít prefix i aliasy)"],
            ["LEFT OUTER JOIN", "Vrátí všechny řádky z levé tabulky a shodné z pravé tabulky (neshodné doplní NULL)"],
            ["FULL OUTER JOIN", "Vrátí všechny řádky z obou tabulek s NULL hodnotami tam, kde chybí protějšek"]
          ]
        },
        {
          title: "DDL vs DML & Transakční řízení",
          rows: [
            ["DML (Data Manipulation)", "INSERT, UPDATE, DELETE — změny jsou dočasné do zavolání COMMIT nebo ROLLBACK"],
            ["DDL (Data Definition)", "CREATE, ALTER, DROP, TRUNCATE — provádí okamžitý a nevratný implicitní COMMIT!"],
            ["TRUNCATE vs DELETE", "TRUNCATE je DDL (resetuje high-water mark, maže bleskově celou tabulku, nelze rollbackovat)"],
            ["COMMIT & ROLLBACK", "COMMIT permanentně uloží změny transakce; ROLLBACK vrátí stav před začátek transakce"]
          ]
        }
      ],

      python: [
        {
          title: "Aritmetické operátory & Priorita",
          rows: [
            ["** (Umocnění)", "Asociativita zprava doleva (right-to-left): 2 ** 3 ** 2 = 2 ** 9 = 512"],
            ["* / // %", "Násobení, standardní dělení (/ vrací float!), celočíselné dělení (//) a zbytek (%)"],
            ["+ a -", "Sčítání a odčítání; konkatenace řetězců ('a' + 'b') a spojování seznamů"],
            ["* (řetězec/seznam)", "Replikace řetězce nebo seznamu ('3' * 2 = '33')"],
            ["print(sep, end)", "sep='oddělovač' (výchozí mezera), end='zakončení' (výchozí '\\n')"]
          ]
        },
        {
          title: "Bitové operátory & Číselné soustavy",
          rows: [
            ["0b..., 0o..., 0x...", "Dvojková (0b10=2), osmičková (0o10=8) a šestnáctková (0x10=16) soustava"],
            ["& (AND), | (OR)", "Bitový součin a bitový součet po bitech"],
            ["^ (XOR)", "Bitová neshoda (exkluzivní OR, a ^ b) — využívá se i pro algoritmus XOR swap"],
            ["~ (NOT)", "Bitová negace (~x = -(x + 1), např. ~4 = -5)"],
            ["<< a >>", "Bitový posun doleva (násobení 2^n) a doprava (dělení 2^n)"]
          ]
        },
        {
          title: "Řízení toku & Práce se seznamy (Lists)",
          rows: [
            ["while-else / for-else", "Větev else se provede pouze při přirozeném doběhnutí cyklu, NIKDY po break"],
            ["break vs continue", "break okamžitě ukončí celý cyklus; continue přeskočí zbytek těla do další iterace"],
            ["list.insert(idx, val)", "Vloží prvek před zadaný index (insert(-1, x) vkládá před poslední prvek)"],
            ["list[start:stop:step]", "Slicování seznamu (stop je vyjmut); list[::-1] obrátí seznam; list[:] vytvoří kopii"],
            ["del list[i] / del list[:]", "del list[i] smaže prvek; del list[:] vyprázdní celý seznam in-place bez změny reference"]
          ]
        },
        {
          title: "N-tice (Tuples) & Slovníky (Dictionaries)",
          rows: [
            ["Tuple (x, y)", "Neměnná (immutable) sekvence; položky nelze přiřazovat (t[0]=1 vyvolá TypeError)"],
            ["Jednoprvkový tuple", "Vyžaduje čárku: (1,) — samotné (1) je pouze celočíselný výraz v závorkách!"],
            ["dict.keys(), .values()", "Iterace přes klíče (výchozí: for k in dict) nebo přes hodnoty"],
            ["dict.items()", "Vrací dvojice (klíč, hodnota) pro procházení ve for cyklu"],
            ["dict.update(d2)", "Sloučí slovníky; existující klíče z d2 přepíší původní hodnoty v d1"]
          ]
        },
        {
          title: "Funkce, Scopy & Výjimky",
          rows: [
            ["Positional vs Keyword", "Poziční argumenty MUSÍ předcházet všem klíčovým argumentům (jinak SyntaxError)"],
            ["Default parametry", "Parametry s výchozí hodnotou (def f(a, b=2)) musí být až za povinnými parametry"],
            ["global x", "Umožňuje modifikovat globální proměnnou uvnitř lokálního těla funkce"],
            ["Hierarchie výjimek", "BaseException -> Exception -> ArithmeticError -> ZeroDivisionError"],
            ["Pořadí except bloků", "Specifičtější výjimky musí předcházet obecnějším předkům; výchozí except: musí být poslední"]
          ]
        }
      ],

      js2: [
        {
          title: "Bezřídové objekty, Deskriptory & Prototypy",
          rows: [
            ["Object.defineProperty(obj, p, d)", "Definuje vlastnost; vynechané atributy mají výchozí hodnotu false!"],
            ["writable: false", "Vlastnost je read-only; pokus o přepis v use strict vyvolá TypeError"],
            ["enumerable: false", "Skrytá pro for...in a Object.keys(), ale přímo přístupná"],
            ["configurable: false", "Nelze smazat (delete) ani znovu konfigurovat deskriptor"],
            ["Object.freeze(obj)", "Úplné zmrazení: zakáže přidávání, mazání i modifikaci hodnot"],
            ["Object.seal(obj)", "Zapečetění: zakáže přidávání a mazání, ale existující writable hodnoty lze měnit"],
            ["Object.create(proto)", "Vytvoří nový objekt s explicitně nastaveným prototypem proto"]
          ]
        },
        {
          title: "ES6 Třídy (Classes) & Dědičnost",
          rows: [
            ["class Sub extends Super", "Třídní dědičnost (syntaktický cukr nad prototypy)"],
            ["super(...args)", "Povinné volání konstruktoru předka před jakýmkoliv použitím 'this'!"],
            ["super.method()", "Volání původní přepsané metody z rodičovské třídy"],
            ["static methodName()", "Statická metoda navázaná na samotnou třídu (Constructor), nikoliv na instance"],
            ["get prop() / set prop(val)", "Gettery a settery — čtou se a zapisují bez závorek ()"],
            ["#privateField", "Privátní vlastnosti třídy s prefixem #; nepřístupné mimo tělo třídy"]
          ]
        },
        {
          title: "Vestavěné objekty & Pokročilé kolekce",
          rows: [
            ["Set (kolekce)", "Ukládá pouze unikátní hodnoty; metody .add(), .has(), vlastnost .size"],
            ["Map (asociativní pole)", "Klíče mohou být libovolného typu (objekty, čísla); .set(), .get(), .size"],
            ["JSON.stringify(obj)", "Při serializaci vynechává vlastnosti s undefined, funkcemi a Symboly"],
            ["Number.isNaN(v)", "Striktní test bez implicitní typové konverze (isNaN('a')=true vs Number.isNaN('a')=false)"],
            ["Date měsíce", "Měsíce jsou indexovány od 0: 0 = leden, 1 = únor, 11 = prosinec"],
            ["reduce(acc, curr, init)", "Agregace pole do jedné hodnoty se zadaným počátečním akumulátorem"]
          ]
        },
        {
          title: "Funkce, Kontext 'this' & Asynchronie",
          rows: [
            ["...rest parametr", "Shromažďuje zbylé argumenty do pole; MUSÍ být posledním parametrem"],
            ["Uzávěra (Closure)", "Funkce si uchovává přístup k proměnným ze svého vnějšího lexikálního scope"],
            ["IIFE", "(function(){ ... })() — okamžitě vyvolaná funkce tvořící izolovaný scope"],
            ["call vs apply", "call(this, a, b) předává argumenty jednotlivě; apply(this, [a, b]) v poli"],
            ["bind(thisArg)", "Vrací novou funkci s trvale navázaným kontextem this"],
            ["Arrow funkce this", "Nemají vlastní 'this', přebírají jej lexikálně z okolí (nelze přebindovat)"],
            ["Generátory (function*)", "Pozastavitelné funkce s operátorem yield; iterátor vrací { value, done }"],
            ["Promise stavy", "pending (čeká), fulfilled (vyřešen), rejected (zamítnut); fail-fast Promise.all"],
            ["async funkce", "Vždy vrací Promise (automaticky zabalí návratovou hodnotu)"]
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
     USER PROFILE, COOKIES & STATISTICS
     ---------------------------------------------------- */
  getCookie(name) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  }

  setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  initUser() {
    const cookieUser = this.getCookie('user_nickname');
    const localUser = localStorage.getItem('user_nickname');
    this.nickname = (cookieUser || localUser || 'Student').trim();

    this.setCookie('user_nickname', this.nickname);
    localStorage.setItem('user_nickname', this.nickname);

    this.updateUserNavbar();
  }

  getStatsKey() {
    return `netacad_stats_${this.nickname.toLowerCase()}`;
  }

  getUserStats() {
    const key = this.getStatsKey();
    const raw = localStorage.getItem(key);
    let stats = null;
    if (raw) {
      try {
        stats = JSON.parse(raw);
      } catch (e) {
        console.error('Error parsing stats:', e);
      }
    }
    if (!stats) {
      stats = {
        nickname: this.nickname,
        createdAt: new Date().toISOString(),
        exams: [],
        practice: {
          totalAnswered: 0,
          totalCorrect: 0,
          questions: {}
        }
      };
    }
    if (!stats.practice) {
      stats.practice = {
        totalAnswered: stats.practiceAnswered || 0,
        totalCorrect: stats.practiceCorrect || 0,
        questions: {}
      };
    }
    if (!stats.practice.questions) {
      stats.practice.questions = {};
    }
    if (!Array.isArray(stats.exams)) {
      stats.exams = [];
    }
    return stats;
  }

  saveUserStats(stats) {
    const key = this.getStatsKey();
    localStorage.setItem(key, JSON.stringify(stats));
    this.updateUserNavbar();
  }

  setNickname(newNick) {
    const clean = (newNick || '').trim();
    if (!clean) return;
    this.nickname = clean;
    this.setCookie('user_nickname', clean);
    localStorage.setItem('user_nickname', clean);
    this.updateUserNavbar();
    if (this.activeMode === 'stats') {
      this.renderStatsView();
    }
  }

  openNicknameModal() {
    this.sound.click();
    const modal = document.getElementById('nicknameModal');
    const input = document.getElementById('nicknameInput');
    if (input) input.value = this.nickname;
    if (modal) {
      modal.style.display = 'flex';
      setTimeout(() => input && input.focus(), 80);
    }
  }

  closeNicknameModal() {
    this.sound.click();
    const modal = document.getElementById('nicknameModal');
    if (modal) modal.style.display = 'none';
  }

  saveNicknameFromModal() {
    const input = document.getElementById('nicknameInput');
    const val = (input ? input.value : '').trim();
    if (!val) {
      alert('Přezdívka nesmí být prázdná!');
      return;
    }
    this.sound.click();
    this.setNickname(val);
    const modal = document.getElementById('nicknameModal');
    if (modal) modal.style.display = 'none';
  }

  resetUserStats() {
    if (confirm(`Opravdu chcete vymazat veškerou historii zkoušek a statistiky tréninku pro přezdívku "${this.nickname}"?`)) {
      const key = this.getStatsKey();
      localStorage.removeItem(key);
      this.sound.click();
      this.updateUserNavbar();
      this.updatePracticeLiveStats();
      this.updatePracticeFilterDropdown();
      if (this.activeMode === 'stats') {
        this.renderStatsView();
      }
    }
  }

  recordExamResult(scorePct, correctCount, total, elapsedSeconds, passed) {
    const stats = this.getUserStats();
    stats.exams.push({
      id: 'exam_' + Date.now(),
      date: new Date().toISOString(),
      certId: this.activeCert,
      certTitle: CERTIFICATES_DATA[this.activeCert].title,
      scorePct: scorePct,
      correctCount: correctCount,
      totalQuestions: total,
      timeSeconds: elapsedSeconds,
      passed: passed
    });
    this.saveUserStats(stats);

    const banner = document.getElementById('savedProfileName');
    if (banner) banner.textContent = this.nickname;
  }

  updateUserNavbar() {
    const navEl = document.getElementById('navNickname');
    if (navEl) navEl.textContent = this.nickname;
  }

  updatePracticeLiveStats() {
    const cert = CERTIFICATES_DATA[this.activeCert];
    if (!cert) return;

    const stats = this.getUserStats();
    const pMap = stats.practice?.questions || {};

    let correctCount = 0;
    let wrongCount = 0;

    cert.questions.forEach(q => {
      const rec = pMap[q.id];
      if (rec) {
        if (rec.lastResult === true) {
          correctCount++;
        } else if (rec.lastResult === false) {
          wrongCount++;
        }
      }
    });

    const totalAnswered = correctCount + wrongCount;
    const rate = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    const elC = document.getElementById('plsCorrectVal');
    const elW = document.getElementById('plsWrongVal');
    const elR = document.getElementById('plsRateVal');
    if (elC) elC.textContent = correctCount;
    if (elW) elW.textContent = wrongCount;
    if (elR) elR.textContent = `${rate} %`;
  }

  updatePracticeFilterDropdown() {
    const cert = CERTIFICATES_DATA[this.activeCert];
    const select = document.getElementById('moduleFilterSelect');
    if (!select || !cert) return;

    const stats = this.getUserStats();
    const pMap = stats.practice?.questions || {};

    let certMistakes = 0;
    let certUnseen = 0;
    cert.questions.forEach(q => {
      const rec = pMap[q.id];
      if (!rec) {
        certUnseen++;
      } else if (rec.lastResult === false) {
        certMistakes++;
      }
    });

    const currentVal = select.value || 'all';

    select.innerHTML = `
      <option value="all">Všechny otázky (${cert.questions.length})</option>
      ${certMistakes > 0 ? `<option value="mistakes">⚠️ Pouze chybné otázky (${certMistakes})</option>` : ''}
      ${certUnseen > 0 ? `<option value="unseen">🆕 Pouze neprocvičené (${certUnseen})</option>` : ''}
    `;

    const grp = document.createElement('optgroup');
    grp.label = "Podle modulů a témat:";
    cert.modules.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.id;
      const count = cert.questions.filter(q => q.module === m.id).length;
      opt.textContent = `${m.name} (${count})`;
      grp.appendChild(opt);
    });
    select.appendChild(grp);

    if (Array.from(select.options).some(o => o.value === currentVal)) {
      select.value = currentVal;
    }
  }

  switchStatsSubtab(subtab) {
    document.querySelectorAll('.stats-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subtab === subtab);
    });

    const panels = {
      overview: document.getElementById('subtabOverview'),
      practice: document.getElementById('subtabPractice'),
      exams: document.getElementById('subtabExams')
    };

    Object.entries(panels).forEach(([k, el]) => {
      if (el) {
        el.style.display = (k === subtab) ? 'block' : 'none';
        el.classList.toggle('active', k === subtab);
      }
    });
  }

  renderStatsView() {
    const stats = this.getUserStats();

    // Display Nickname
    const nameDisp = document.getElementById('statsUserNameDisplay');
    if (nameDisp) nameDisp.textContent = this.nickname;

    const exams = Array.isArray(stats.exams) ? stats.exams : [];
    const totalExams = exams.length;
    const passedExams = exams.filter(e => e.passed).length;
    const passRate = totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0;

    // Practice stats
    const pStats = stats.practice || { totalAnswered: 0, totalCorrect: 0, questions: {} };
    const pTotalAnswered = pStats.totalAnswered || 0;
    const pTotalCorrect = pStats.totalCorrect || 0;
    const pAccuracy = pTotalAnswered > 0 ? Math.round((pTotalCorrect / pTotalAnswered) * 100) : 0;

    const pQuestionsMap = pStats.questions || {};
    const totalBankQuestions = Object.values(CERTIFICATES_DATA).reduce((sum, c) => sum + (c.questions ? c.questions.length : 0), 0);
    const practicedCount = Object.keys(pQuestionsMap).length;
    const mistakesCount = Object.values(pQuestionsMap).filter(q => q.lastResult === false).length;

    // KPI Values - Overview tab
    const kpiExamsEl = document.getElementById('kpiTotalExams');
    const kpiPassEl = document.getElementById('kpiPassRate');
    const kpiPracticeTotalEl = document.getElementById('kpiPracticeTotal');
    const kpiPracticeAccEl = document.getElementById('kpiPracticeAccuracy');

    if (kpiExamsEl) kpiExamsEl.textContent = totalExams;
    if (kpiPassEl) kpiPassEl.textContent = `${passRate} %`;
    if (kpiPracticeTotalEl) kpiPracticeTotalEl.textContent = pTotalAnswered;
    if (kpiPracticeAccEl) kpiPracticeAccEl.textContent = `${pAccuracy} %`;

    // KPI Values - Practice tab
    const pkpiAnsEl = document.getElementById('pkpiAnswered');
    const pkpiAccEl = document.getElementById('pkpiAccuracy');
    const pkpiCovEl = document.getElementById('pkpiCoverage');
    const pkpiMisEl = document.getElementById('pkpiMistakes');

    if (pkpiAnsEl) pkpiAnsEl.textContent = pTotalAnswered;
    if (pkpiAccEl) pkpiAccEl.textContent = `${pAccuracy} %`;
    if (pkpiCovEl) pkpiCovEl.textContent = `${practicedCount} / ${totalBankQuestions}`;
    if (pkpiMisEl) pkpiMisEl.textContent = mistakesCount;

    // Per Certificate Performance Grid (Overview)
    this.renderCertStatsGrid(exams);

    // Practice Detailed Cards (Practice tab)
    this.renderPracticeCertGrid();

    // Practice Mistakes Notebook (Practice tab)
    this.renderPracticeMistakesList();

    // History Table (Exams tab)
    this.renderExamHistoryTable(exams);
  }

  renderCertStatsGrid(exams) {
    const grid = document.getElementById('certStatsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const stats = this.getUserStats();
    const pMap = stats.practice?.questions || {};

    Object.entries(CERTIFICATES_DATA).forEach(([certId, cert]) => {
      const certExams = exams.filter(e => e.certId === certId);
      const attempts = certExams.length;
      const bestScore = attempts > 0 ? Math.max(...certExams.map(e => e.scorePct)) : 0;
      const hasPassed = certExams.some(e => e.passed);

      let practicedInCert = 0;
      cert.questions.forEach(q => {
        if (pMap[q.id]) practicedInCert++;
      });
      const practicePct = Math.round((practicedInCert / cert.questions.length) * 100);

      let statusHtml = '';
      if (hasPassed) {
        statusHtml = `<span class="status-badge passed"><i class="fas fa-check-circle"></i> Zkouška složena</span>`;
      } else if (attempts > 0) {
        statusHtml = `<span class="status-badge failed"><i class="fas fa-times-circle"></i> Zkouška nesložena</span>`;
      } else {
        statusHtml = `<span class="status-badge empty"><i class="far fa-circle"></i> Bez zkoušky</span>`;
      }

      const card = document.createElement('div');
      card.className = 'cert-stat-card';
      card.innerHTML = `
        <div class="cert-stat-header">
          <div class="cert-stat-title-wrap">
            <i class="${cert.icon}" style="color: ${cert.color};"></i>
            <div>
              <h4>${this.escapeHtml(cert.title)}</h4>
              <span>Limit zkoušky: ${cert.passScore} %</span>
            </div>
          </div>
          ${statusHtml}
        </div>

        <div class="cert-stat-metrics">
          <div>
            <div class="metric-item-val" style="color: ${bestScore >= cert.passScore ? '#10b981' : (attempts > 0 ? '#ef4444' : 'inherit')}">
              ${attempts > 0 ? `${bestScore} %` : '--'}
            </div>
            <div class="metric-item-lbl">Zkouška skóre</div>
          </div>
          <div>
            <div class="metric-item-val">${attempts}</div>
            <div class="metric-item-lbl">Pokusů zkoušky</div>
          </div>
          <div>
            <div class="metric-item-val" style="color: #38bdf8;">${practicedInCert} / ${cert.questions.length}</div>
            <div class="metric-item-lbl">V tréninku (${practicePct} %)</div>
          </div>
        </div>

        <div class="cert-stat-progress">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted);">
            <span>Procvičeno v tréninku</span>
            <span>${practicedInCert} z ${cert.questions.length} otázek (${practicePct} %)</span>
          </div>
          <div class="cert-stat-progress-bar">
            <div class="cert-stat-progress-fill" style="width: ${practicePct}%; background: ${practicePct === 100 ? '#10b981' : '#38bdf8'};"></div>
          </div>
        </div>

        <div class="practice-actions-row">
          <button class="btn btn-secondary btn-sm" onclick="app.launchCertSimulator('${certId}')">
            <i class="fas fa-graduation-cap"></i> ${attempts > 0 ? 'Opakovat zkoušku' : 'Simulátor'}
          </button>
          <button class="btn btn-primary btn-sm" onclick="app.launchPractice('${certId}', 'all')">
            <i class="fas fa-book-open"></i> Trénovat
          </button>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  renderPracticeCertGrid() {
    const grid = document.getElementById('practiceCertGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const stats = this.getUserStats();
    const pMap = stats.practice?.questions || {};

    Object.entries(CERTIFICATES_DATA).forEach(([certId, cert]) => {
      let practicedCount = 0;
      let correctCount = 0;
      let wrongCount = 0;
      let activeMistakes = 0;

      cert.questions.forEach(q => {
        const rec = pMap[q.id];
        if (rec) {
          practicedCount++;
          correctCount += (rec.correct || 0);
          wrongCount += ((rec.answered || 0) - (rec.correct || 0));
          if (rec.lastResult === false) {
            activeMistakes++;
          }
        }
      });

      const totalQuestions = cert.questions.length;
      const coveragePct = Math.round((practicedCount / totalQuestions) * 100);
      const totalAnswers = correctCount + wrongCount;
      const accuracyPct = totalAnswers > 0 ? Math.round((correctCount / totalAnswers) * 100) : 0;

      const card = document.createElement('div');
      card.className = 'practice-cert-card';
      card.innerHTML = `
        <div class="cert-stat-header">
          <div class="cert-stat-title-wrap">
            <i class="${cert.icon}" style="color: ${cert.color};"></i>
            <div>
              <h4>${this.escapeHtml(cert.title)}</h4>
              <span>${practicedCount} z ${totalQuestions} otázek procvičeno (${coveragePct} %)</span>
            </div>
          </div>
          ${activeMistakes > 0 ? `<span class="status-badge failed"><i class="fas fa-triangle-exclamation"></i> ${activeMistakes} chyb</span>` : (practicedCount > 0 ? `<span class="status-badge passed"><i class="fas fa-check"></i> 100 % správně</span>` : `<span class="status-badge empty">Neprocvičeno</span>`)}
        </div>

        <div class="cert-stat-metrics">
          <div>
            <div class="metric-item-val" style="color: ${totalAnswers > 0 ? '#38bdf8' : 'inherit'}">${accuracyPct} %</div>
            <div class="metric-item-lbl">Přesnost odpovědí</div>
          </div>
          <div>
            <div class="metric-item-val" style="color: #10b981">${correctCount}</div>
            <div class="metric-item-lbl">Správně</div>
          </div>
          <div>
            <div class="metric-item-val" style="color: ${wrongCount > 0 ? '#ef4444' : 'inherit'}">${wrongCount}</div>
            <div class="metric-item-lbl">Chybně</div>
          </div>
        </div>

        <div class="cert-stat-progress">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted);">
            <span>Pokrytí otázek</span>
            <span>${coveragePct} %</span>
          </div>
          <div class="cert-stat-progress-bar">
            <div class="cert-stat-progress-fill" style="width: ${coveragePct}%; background: ${coveragePct === 100 ? '#10b981' : '#38bdf8'};"></div>
          </div>
        </div>

        <div class="practice-actions-row">
          <button class="btn btn-secondary btn-sm" onclick="app.launchPractice('${certId}', 'all')">
            <i class="fas fa-play"></i> Trénovat
          </button>
          ${activeMistakes > 0 ? `
            <button class="btn btn-sm btn-outline-danger" onclick="app.launchPractice('${certId}', 'mistakes')">
              <i class="fas fa-redo"></i> Opravit chyby (${activeMistakes})
            </button>
          ` : ''}
          ${(totalQuestions - practicedCount) > 0 ? `
            <button class="btn btn-secondary btn-sm" onclick="app.launchPractice('${certId}', 'unseen')">
              <i class="fas fa-sparkles"></i> Nové (${totalQuestions - practicedCount})
            </button>
          ` : ''}
        </div>
      `;

      grid.appendChild(card);
    });
  }

  renderPracticeMistakesList() {
    const list = document.getElementById('practiceMistakesList');
    const allMistakesBtn = document.getElementById('practiceAllMistakesBtn');
    if (!list) return;
    list.innerHTML = '';

    const stats = this.getUserStats();
    const pMap = stats.practice?.questions || {};

    const mistakes = [];
    Object.entries(CERTIFICATES_DATA).forEach(([certId, cert]) => {
      cert.questions.forEach(q => {
        const rec = pMap[q.id];
        if (rec && rec.lastResult === false) {
          mistakes.push({ certId, cert, q, rec });
        }
      });
    });

    if (allMistakesBtn) {
      allMistakesBtn.style.display = mistakes.length > 0 ? 'inline-flex' : 'none';
    }

    if (!mistakes.length) {
      list.innerHTML = `
        <div class="history-empty-state" style="padding: 2.5rem 1rem;">
          <i class="fas fa-circle-check" style="color: #10b981; opacity: 1; font-size: 2.5rem;"></i>
          <h4 style="font-size: 1.1rem; margin: 8px 0 4px 0; color: #10b981;">V tréninku nemáte žádné aktivní chyby!</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 12px;">
            Všechny dosud zodpovězené otázky máte úspěšně zvládnuté. Pokračujte v procvičování dalších témat.
          </p>
          <button class="btn btn-primary btn-sm" onclick="app.switchView('practice')">
            <i class="fas fa-book-open"></i> Přejít do tréninkového módu
          </button>
        </div>
      `;
      return;
    }

    mistakes.forEach(({ certId, cert, q }) => {
      const card = document.createElement('div');
      card.className = 'mistake-card';
      const modName = cert.modules.find(m => m.id === q.module)?.name || q.module;

      let codeHtml = q.code ? `<div class="code-block" style="margin: 6px 0; font-size: 0.82rem;">${this.escapeHtml(q.code)}</div>` : '';

      card.innerHTML = `
        <div class="mistake-header">
          <span style="font-size: 0.78rem; font-weight: 700; color: ${cert.color}; display: flex; align-items: center; gap: 6px;">
            <i class="${cert.icon}"></i> ${this.escapeHtml(cert.title)} &bull; ${this.escapeHtml(modName)}
          </span>
          <button class="btn btn-sm btn-secondary" onclick="app.practiceSingleQuestion('${certId}', '${q.id}')">
            <i class="fas fa-play"></i> Znovu procvičit
          </button>
        </div>
        <div class="mistake-qtext">${this.escapeHtml(q.question)}</div>
        ${codeHtml}
        <div class="mistake-correct-box">
          <strong style="color: #10b981;"><i class="fas fa-check"></i> Správné řešení:</strong> ${this.escapeHtml(q.options[q.correct])}
        </div>
        <div class="mistake-explanation">
          <strong style="color: #38bdf8;">Vysvětlení:</strong> ${this.escapeHtml(q.explanation)}
        </div>
      `;

      list.appendChild(card);
    });
  }

  launchPractice(certId, filterMode = 'all') {
    this.sound.click();
    this.loadCertificate(certId);
    this.switchView('practice');
    this.startPractice(filterMode);
    const select = document.getElementById('moduleFilterSelect');
    if (select) select.value = filterMode;
  }

  practiceActiveCertMistakes() {
    this.sound.click();
    this.switchView('practice');
    this.startPractice('mistakes');
    const select = document.getElementById('moduleFilterSelect');
    if (select) select.value = 'mistakes';
  }

  practiceSingleQuestion(certId, qId) {
    this.sound.click();
    this.loadCertificate(certId);
    this.switchView('practice');
    const cert = CERTIFICATES_DATA[certId];
    const targetIdx = cert.questions.findIndex(q => q.id === qId);
    this.currentQuestions = [...cert.questions];
    this.currentIndex = targetIdx >= 0 ? targetIdx : 0;
    this.userAnswers = {};
    this.flagged.clear();
    this.updatePracticeLiveStats();
    this.renderQuestion();
  }

  launchCertSimulator(certId) {
    this.sound.click();
    this.loadCertificate(certId);
    this.switchView('simulator', true);
  }

  renderExamHistoryTable(exams) {
    const wrap = document.getElementById('historyTableWrap');
    const counter = document.getElementById('examHistoryCount');
    if (!wrap) return;

    if (counter) {
      counter.textContent = `${exams.length} ${exams.length === 1 ? 'záznam' : (exams.length >= 2 && exams.length <= 4 ? 'záznamy' : 'záznamů')}`;
    }

    if (!exams.length) {
      wrap.innerHTML = `
        <div class="history-empty-state">
          <i class="fas fa-clipboard-list"></i>
          <h4 style="font-size: 1.1rem; margin-bottom: 6px;">Zatím jste neabsolvovali žádný zkouškový test</h4>
          <p style="margin: 4px 0 16px 0; font-size: 0.88rem; color: var(--text-muted);">
            Vyberte si certifikát v horní liště a otestujte své znalosti ve zkouškovém simulátoru.
          </p>
          <button class="btn btn-primary" onclick="app.switchView('simulator', true)">
            <i class="fas fa-graduation-cap"></i> Spustit zkouškový simulátor
          </button>
        </div>
      `;
      return;
    }

    // Sort descending by date
    const sorted = [...exams].reverse();

    let rowsHtml = sorted.map(e => {
      const d = new Date(e.date);
      const dateStr = d.toLocaleDateString('cs-CZ', { day: '2-digit', month: '2-digit', year: 'numeric' }) + ' ' + d.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
      const min = Math.floor(e.timeSeconds / 60);
      const sec = e.timeSeconds % 60;
      const timeStr = `${min}m ${sec}s`;
      const cert = CERTIFICATES_DATA[e.certId] || { title: e.certTitle || e.certId, color: '#38bdf8' };

      return `
        <tr>
          <td><span style="color: var(--text-muted); font-size: 0.82rem;">${dateStr}</span></td>
          <td>
            <strong style="color: ${cert.color || 'inherit'}">${this.escapeHtml(cert.title)}</strong>
          </td>
          <td>
            <span style="font-weight: 700; color: ${e.passed ? '#10b981' : '#ef4444'}">${e.scorePct} %</span>
            <span style="color: var(--text-muted); font-size: 0.8rem; margin-left: 4px;">(${e.correctCount}/${e.totalQuestions})</span>
          </td>
          <td>${timeStr}</td>
          <td>
            <span class="status-badge ${e.passed ? 'passed' : 'failed'}">
              ${e.passed ? '<i class="fas fa-check"></i> PASSED' : '<i class="fas fa-times"></i> FAILED'}
            </span>
          </td>
        </tr>
      `;
    }).join('');

    wrap.innerHTML = `
      <table class="history-table">
        <thead>
          <tr>
            <th>Datum & Čas</th>
            <th>Certifikát</th>
            <th>Výsledek</th>
            <th>Čas trvání</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    `;
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
