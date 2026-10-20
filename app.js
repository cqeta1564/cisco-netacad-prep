/**
 * Cisco Certifications Prep - Modern Clean Engine
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
    this.activeMode = 'simulator'; // 'simulator', 'practice', 'cheatsheet', 'stats'
    
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { questionId: selectedIndex | selectedIndices[] }
    this.practiceEvaluated = {}; // { questionId: boolean }
    this.flagged = new Set();
    this.visited = new Set();
    
    // Exam timer
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.examStartTime = null;

    // Study & App Preferences
    this.prefShuffleQ = localStorage.getItem('pref_shuffle_q') === 'true';
    this.prefShuffleOpt = localStorage.getItem('pref_shuffle_opt') === 'true';
    this.prefShortcuts = localStorage.getItem('pref_shortcuts') !== 'false';

    // PWA Service Worker Registration
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js?v=4').then(reg => {
          if (reg) reg.update();
        }).catch(err => {
          console.log('SW registration note:', err);
        });
      });
    }

    // Cheatsheets
    this.initCheatsheets();

    // User Profile & Statistics
    this.initUser();

    // DOM bindings
    this.bindEvents();
    this.applyTheme(localStorage.getItem('app_theme') || 'dark');
    this.updateSoundIcon();
    this.updateShortcutsHintUI();

    // Init with active cert
    this.loadCertificate(this.activeCert);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app_theme', theme);
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
  }

  updateSoundIcon() {
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.innerHTML = this.sound.enabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
      btn.classList.toggle('muted', !this.sound.enabled);
    }
  }

  bindEvents() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        this.applyTheme(next);
        this.sound.click();
      });
    }

    // Sound toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        this.sound.enabled = !this.sound.enabled;
        localStorage.setItem('sound_enabled', this.sound.enabled);
        this.updateSoundIcon();
        if (this.sound.enabled) this.sound.click();
      });
    }

    // Course Select Dropdown
    const courseSelect = document.getElementById('courseSelectDropdown');
    if (courseSelect) {
      courseSelect.addEventListener('change', (e) => {
        this.sound.click();
        this.loadCertificate(e.target.value);
      });
    }

    // Mode Navigation Tabs
    document.querySelectorAll('.mode-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        this.sound.click();
        this.switchView(mode);
      });
    });

    // Navigation buttons
    const prevBtn = document.getElementById('canvasPrevBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.sound.click();
          this.currentIndex--;
          this.renderQuestion();
        }
      });
    }

    const nextBtn = document.getElementById('canvasNextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex < this.currentQuestions.length - 1) {
          this.sound.click();
          this.currentIndex++;
          this.renderQuestion();
        }
      });
    }

    // Skip Button
    const skipBtn = document.getElementById('skipQuestionBtn');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        this.sound.click();
        if (this.currentIndex < this.currentQuestions.length - 1) {
          this.currentIndex++;
          this.renderQuestion();
        }
      });
    }

    // Flag Question Button
    const flagBtn = document.getElementById('flagQuestionBtn');
    if (flagBtn) {
      flagBtn.addEventListener('click', () => {
        this.sound.click();
        if (!this.currentQuestions.length) return;
        const q = this.currentQuestions[this.currentIndex];
        if (this.flagged.has(q.id)) {
          this.flagged.delete(q.id);
        } else {
          this.flagged.add(q.id);
        }
        this.updateFlagUI();
        this.renderQuestionStrip();
      });
    }

    // Toggle Grid Matrix Button
    const toggleGridBtn = document.getElementById('toggleGridBtn');
    const gridBar = document.getElementById('questionGridBar');
    if (toggleGridBtn && gridBar) {
      toggleGridBtn.addEventListener('click', () => {
        this.sound.click();
        gridBar.style.display = (gridBar.style.display === 'none') ? 'block' : 'none';
      });
    }

    // Submit / Finish Exam Button
    const submitBtn = document.getElementById('finishExamBtn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.confirmFinishExam();
      });
    }

    // Practice Filter Select
    const modSelect = document.getElementById('practiceFilterSelect');
    if (modSelect) {
      modSelect.addEventListener('change', (e) => {
        this.sound.click();
        this.startPractice(e.target.value);
      });
    }

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
        if (e.target === nickModal) this.closeNicknameModal();
      });
    }

    // Reset stats modal triggers
    const resetStatsBtn = document.getElementById('resetStatsBtn');
    if (resetStatsBtn) {
      resetStatsBtn.addEventListener('click', () => {
        document.getElementById('resetModal').style.display = 'flex';
      });
    }
    const closeResetBtn = document.getElementById('closeResetModalBtn');
    const cancelResetBtn = document.getElementById('cancelResetBtn');
    const confirmResetBtn = document.getElementById('confirmResetBtn');
    if (closeResetBtn) {
      closeResetBtn.addEventListener('click', () => {
        document.getElementById('resetModal').style.display = 'none';
      });
    }
    if (cancelResetBtn) {
      cancelResetBtn.addEventListener('click', () => {
        document.getElementById('resetModal').style.display = 'none';
      });
    }
    if (confirmResetBtn) {
      confirmResetBtn.addEventListener('click', () => {
        this.resetUserStats();
        document.getElementById('resetModal').style.display = 'none';
      });
    }

    // Settings modal triggers
    const settingsBtn = document.getElementById('settingsToggleBtn');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => this.openSettingsModal());
    }
    const closeSettingsBtn = document.getElementById('closeSettingsModalBtn');
    if (closeSettingsBtn) {
      closeSettingsBtn.addEventListener('click', () => this.closeSettingsModal());
    }
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) {
      saveSettingsBtn.addEventListener('click', () => this.saveSettings());
    }
    const settingsModal = document.getElementById('settingsModal');
    if (settingsModal) {
      settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) this.closeSettingsModal();
      });
    }

    // Cheatsheet live search & print
    const cheatSearch = document.getElementById('cheatsheetSearchInput');
    if (cheatSearch) {
      cheatSearch.addEventListener('input', (e) => {
        this.filterCheatsheet(e.target.value);
      });
    }
    const clearSearchBtn = document.getElementById('clearCheatSearchBtn');
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (cheatSearch) {
          cheatSearch.value = '';
          this.filterCheatsheet('');
          cheatSearch.focus();
        }
      });
    }
    const printCheatBtn = document.getElementById('printCheatsheetBtn');
    if (printCheatBtn) {
      printCheatBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Global keyboard shortcuts
    window.addEventListener('keydown', (e) => this.handleKeyboardShortcut(e));
  }

  /* ----------------------------------------------------
     APP & STUDY SETTINGS
     ---------------------------------------------------- */
  openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;
    const qToggle = document.getElementById('shuffleQuestionsToggle');
    const optToggle = document.getElementById('shuffleOptionsToggle');
    const scToggle = document.getElementById('keyboardShortcutsToggle');
    const sndToggle = document.getElementById('soundEffectsToggle');

    if (qToggle) qToggle.checked = this.prefShuffleQ;
    if (optToggle) optToggle.checked = this.prefShuffleOpt;
    if (scToggle) scToggle.checked = this.prefShortcuts;
    if (sndToggle) sndToggle.checked = this.sound.enabled;

    modal.style.display = 'flex';
  }

  closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) modal.style.display = 'none';
  }

  saveSettings() {
    const qToggle = document.getElementById('shuffleQuestionsToggle');
    const optToggle = document.getElementById('shuffleOptionsToggle');
    const scToggle = document.getElementById('keyboardShortcutsToggle');
    const sndToggle = document.getElementById('soundEffectsToggle');

    if (qToggle) {
      this.prefShuffleQ = qToggle.checked;
      localStorage.setItem('pref_shuffle_q', this.prefShuffleQ);
    }
    if (optToggle) {
      this.prefShuffleOpt = optToggle.checked;
      localStorage.setItem('pref_shuffle_opt', this.prefShuffleOpt);
    }
    if (scToggle) {
      this.prefShortcuts = scToggle.checked;
      localStorage.setItem('pref_shortcuts', this.prefShortcuts);
      this.updateShortcutsHintUI();
    }
    if (sndToggle) {
      this.sound.enabled = sndToggle.checked;
      localStorage.setItem('sound_enabled', this.sound.enabled);
      this.updateSoundIcon();
    }

    this.closeSettingsModal();
    this.sound.click();
  }

  updateShortcutsHintUI() {
    const hint = document.getElementById('shortcutsHintLabel');
    if (hint) {
      hint.style.display = this.prefShortcuts ? 'inline-flex' : 'none';
    }
  }

  /* ----------------------------------------------------
     QUESTION SHUFFLE HELPER
     ---------------------------------------------------- */
  prepareQuestions(rawList, shuffleQ = false, shuffleOpt = false) {
    if (!rawList || !rawList.length) return [];

    let list = rawList.map(orig => {
      const q = {
        ...orig,
        options: [...orig.options],
        correct: Array.isArray(orig.correct) ? [...orig.correct] : orig.correct
      };

      if (shuffleOpt && q.options && q.options.length > 1) {
        const isArr = Array.isArray(q.correct);
        const paired = q.options.map((optText, origIdx) => ({
          text: optText,
          isCorrect: isArr ? q.correct.includes(origIdx) : origIdx === q.correct
        }));

        for (let i = paired.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [paired[i], paired[j]] = [paired[j], paired[i]];
        }

        q.options = paired.map(p => p.text);
        if (isArr) {
          const newCorrect = [];
          paired.forEach((p, idx) => {
            if (p.isCorrect) newCorrect.push(idx);
          });
          newCorrect.sort((a, b) => a - b);
          q.correct = newCorrect;
        } else {
          q.correct = paired.findIndex(p => p.isCorrect);
        }
      }
      return q;
    });

    if (shuffleQ && list.length > 1) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }

    return list;
  }

  /* ----------------------------------------------------
     KEYBOARD SHORTCUTS HANDLER
     ---------------------------------------------------- */
  handleKeyboardShortcut(e) {
    if (!this.prefShortcuts) return;

    // Do not trigger shortcuts when typing in form inputs or editable elements
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    if (e.target.isContentEditable) return;

    // Do not trigger if any modal overlay is visible
    const nickModal = document.getElementById('nicknameModal');
    const resetModal = document.getElementById('resetModal');
    const settingsModal = document.getElementById('settingsModal');
    if ((nickModal && nickModal.style.display === 'flex') ||
        (resetModal && resetModal.style.display === 'flex') ||
        (settingsModal && settingsModal.style.display === 'flex')) {
      return;
    }

    // Only active when quiz view is open and questions are loaded
    const quizView = document.getElementById('quizView');
    if (!quizView || !quizView.classList.contains('active')) return;
    if (!this.currentQuestions || !this.currentQuestions.length) return;

    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;

    const key = e.key.toLowerCase();

    // Option selection keys: 1-6, A-E
    const keyMap = {
      '1': 0, 'a': 0,
      '2': 1, 'b': 1,
      '3': 2, 'c': 2,
      '4': 3, 'd': 3,
      '5': 4, 'e': 4,
      '6': 5
    };

    if (Object.prototype.hasOwnProperty.call(keyMap, key)) {
      const optIdx = keyMap[key];
      if (optIdx < q.options.length) {
        e.preventDefault();
        this.selectOption(optIdx);
        return;
      }
    }

    // Navigation: Left arrow (Previous question)
    if (e.key === 'ArrowLeft') {
      if (this.currentIndex > 0) {
        e.preventDefault();
        this.sound.click();
        this.currentIndex--;
        this.renderQuestion();
      }
      return;
    }

    // Confirmation or Navigation: Enter
    if (e.key === 'Enter') {
      const isPractice = this.activeMode === 'practice';
      const isMulti = Array.isArray(q.correct);
      if (isPractice && isMulti && !this.practiceEvaluated[q.id]) {
        const current = Array.isArray(this.userAnswers[q.id]) ? this.userAnswers[q.id] : [];
        if (current.length === q.correct.length) {
          e.preventDefault();
          this.confirmPracticeAnswer();
          return;
        }
      }
      if (this.currentIndex < this.currentQuestions.length - 1) {
        e.preventDefault();
        this.sound.click();
        this.currentIndex++;
        this.renderQuestion();
      }
      return;
    }

    // Navigation: Right arrow (Next question)
    if (e.key === 'ArrowRight') {
      if (this.currentIndex < this.currentQuestions.length - 1) {
        e.preventDefault();
        this.sound.click();
        this.currentIndex++;
        this.renderQuestion();
      }
      return;
    }

    // Flag / Unflag question: 'F' or 'f'
    if (key === 'f') {
      e.preventDefault();
      this.sound.click();
      if (this.flagged.has(q.id)) {
        this.flagged.delete(q.id);
      } else {
        this.flagged.add(q.id);
      }
      this.updateFlagUI();
      this.renderQuestionStrip();
      return;
    }
  }

  /* ----------------------------------------------------
     CERTIFICATE SETUP
     ---------------------------------------------------- */
  loadCertificate(certId) {
    this.activeCert = certId;
    const cert = CERTIFICATES_DATA[certId];

    // Update Dropdown
    const select = document.getElementById('courseSelectDropdown');
    if (select && select.value !== certId) {
      select.value = certId;
    }

    // Update Course Badge
    const badge = document.getElementById('activeCourseBadge');
    if (badge) {
      badge.textContent = cert.badge;
    }

    // Update Practice Filter Dropdown & Live Stats
    this.updatePracticeFilterDropdown();
    this.updatePracticeLiveStats();

    // Switch view / start
    this.switchView(this.activeMode, true);
  }

  /* ----------------------------------------------------
     MODE SWITCHING
     ---------------------------------------------------- */
  switchView(mode, forceReset = false) {
    this.activeMode = mode;

    // Update navigation buttons
    document.querySelectorAll('.mode-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));

    const timerBox = document.getElementById('examTimerBox');
    const practiceFilter = document.getElementById('practiceFilterWrap');
    const submitBtn = document.getElementById('finishExamBtn');
    const skipBtn = document.getElementById('skipQuestionBtn');

    if (mode === 'simulator') {
      document.getElementById('quizView').classList.add('active');
      if (timerBox) timerBox.style.display = 'flex';
      if (practiceFilter) practiceFilter.style.display = 'none';
      if (submitBtn) submitBtn.style.display = 'inline-flex';
      if (skipBtn) skipBtn.style.display = 'inline-flex';

      if (forceReset || !this.currentQuestions.length) {
        this.startSimulator();
      } else {
        this.renderQuestion();
      }
    } else if (mode === 'practice') {
      document.getElementById('quizView').classList.add('active');
      if (timerBox) timerBox.style.display = 'none';
      if (practiceFilter) practiceFilter.style.display = 'flex';
      if (submitBtn) submitBtn.style.display = 'none';
      if (skipBtn) skipBtn.style.display = 'inline-flex';

      this.stopTimer();
      this.updatePracticeFilterDropdown();
      this.updatePracticeLiveStats();

      if (forceReset || !this.currentQuestions.length) {
        this.startPractice();
      } else {
        this.renderQuestion();
      }
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
     QUESTION ANSWER EVALUATION HELPERS
     ---------------------------------------------------- */
  isAnswerCorrect(q, userPick) {
    if (userPick === undefined || userPick === null) return false;
    if (Array.isArray(q.correct)) {
      if (!Array.isArray(userPick)) return false;
      if (userPick.length !== q.correct.length) return false;
      const sortedUser = [...userPick].sort((a, b) => a - b);
      const sortedCorrect = [...q.correct].sort((a, b) => a - b);
      return sortedCorrect.every((val, i) => val === sortedUser[i]);
    }
    return userPick === q.correct;
  }

  isQuestionAnswered(q, userPick) {
    if (userPick === undefined || userPick === null) return false;
    if (Array.isArray(q.correct)) {
      return Array.isArray(userPick) && userPick.length === q.correct.length;
    }
    return true;
  }

  getCorrectAnswerText(q) {
    if (!q || !q.options) return '';
    if (Array.isArray(q.correct)) {
      return q.correct.map(idx => this.escapeHtml(q.options[idx])).join('; ');
    }
    return this.escapeHtml(q.options[q.correct]);
  }

  getUserAnswerText(q, userPick) {
    if (userPick === undefined || (Array.isArray(userPick) && userPick.length === 0)) {
      return '<em>Nezodpovězeno</em>';
    }
    if (Array.isArray(userPick)) {
      return userPick.map(idx => this.escapeHtml(q.options[idx])).join('; ');
    }
    return this.escapeHtml(q.options[userPick]);
  }

  /* ----------------------------------------------------
     SIMULATOR MODE
     ---------------------------------------------------- */
  startSimulator() {
    this.stopTimer();
    const cert = CERTIFICATES_DATA[this.activeCert];

    const all = cert?.questions ? [...cert.questions] : [];
    if (!all.length) {
      this.currentQuestions = [];
      this.currentIndex = 0;
      this.renderQuestion();
      return;
    }

    this.currentQuestions = this.prepareQuestions(all, this.prefShuffleQ, this.prefShuffleOpt);
    this.currentIndex = 0;
    this.userAnswers = {};
    this.practiceEvaluated = {};
    this.flagged.clear();
    this.visited.clear();
    this.visited.add(0);

    // Timer setup
    this.timerSeconds = (cert.timeLimit || 45) * 60;
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
        alert('Časový limit testu vypršel! Vaše odpovědi budou nyní vyhodnoceny.');
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
      if (this.timerSeconds < 300) {
        box.classList.add('warning');
      } else {
        box.classList.remove('warning');
      }
    }
  }

  confirmFinishExam() {
    let answeredCount = 0;
    this.currentQuestions.forEach(q => {
      if (this.isQuestionAnswered(q, this.userAnswers[q.id])) {
        answeredCount++;
      }
    });
    const total = this.currentQuestions.length;
    const unanswered = total - answeredCount;

    let msg = 'Opravdu chcete odevzdat test?';
    if (unanswered > 0) {
      msg = `Upozornění: Zbývá ještě ${unanswered} nezodpovězených otázek z ${total}!\n\nOpravdu chcete test ukončit a vyhodnotit?`;
    }

    if (confirm(msg)) {
      this.sound.click();
      this.finishExam();
    }
  }

  finishExam() {
    this.stopTimer();

    let correctCount = 0;
    this.currentQuestions.forEach(q => {
      if (this.isAnswerCorrect(q, this.userAnswers[q.id])) {
        correctCount++;
      }
    });

    const total = this.currentQuestions.length;
    const scorePct = total ? Math.round((correctCount / total) * 100) : 0;
    const cert = CERTIFICATES_DATA[this.activeCert];
    const passed = scorePct >= (cert.passScore || 70);

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
    badgeWrap.className = `result-badge-circle ${passed ? 'pass' : 'fail'}`;
    badgeWrap.innerHTML = passed ? '<i class="fas fa-award"></i>' : '<i class="fas fa-times-circle"></i>';

    const title = document.getElementById('resultTitle');
    const subtitle = document.getElementById('resultSubtitle');
    if (passed) {
      title.textContent = 'Gratulujeme! Test úspěšně složen!';
      subtitle.textContent = `Úspěšně jste splnili certifikační kritéria pro ${cert.title} (hranice ${cert.passScore || 70} %).`;
    } else {
      title.textContent = 'Test nebyl úspěšně složen';
      subtitle.textContent = `K úspěšnému absolvování je nutné dosáhnout alespoň ${cert.passScore || 70} %. Projděte si níže své chyby a zkuste to znovu!`;
    }

    document.getElementById('resScoreVal').textContent = `${scorePct} %`;
    document.getElementById('resCorrectVal').textContent = `${correctCount} / ${total}`;

    const elapsedSeconds = ((cert.timeLimit || 45) * 60) - this.timerSeconds;
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
    if (!list) return;
    list.innerHTML = '';

    this.currentQuestions.forEach((q, idx) => {
      const userPick = this.userAnswers[q.id];
      const isCorrect = this.isAnswerCorrect(q, userPick);

      const item = document.createElement('div');
      item.className = `review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}`;

      let codeHtml = q.code ? `<div class="code-box" style="margin: 8px 0; font-size: 0.85rem;">${this.escapeHtml(q.code)}</div>` : '';

      const userText = this.getUserAnswerText(q, userPick);
      const correctText = this.getCorrectAnswerText(q);
      const questionText = this.escapeHtml(q.question);
      const explanationText = this.escapeHtml(q.explanation);

      const isMulti = Array.isArray(q.correct);
      const multiBadge = isMulti
        ? `<span style="font-size: 0.75rem; background: rgba(4,159,217,0.15); color: #049fd9; padding: 2px 7px; border-radius: 4px; font-weight: 700;">Vícečetná volba (${q.correct.length})</span>`
        : '';

      item.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-weight: 700; font-size: 0.9rem; color: ${isCorrect ? '#10b981' : '#ef4444'};">
            Otázka ${idx + 1} &bull; ${isCorrect ? '<i class="fas fa-check"></i> Správně' : '<i class="fas fa-times"></i> Špatně'}
          </span>
          ${multiBadge}
        </div>
        <p style="font-weight: 600; margin-bottom: 8px; font-size: 0.95rem;">${questionText}</p>
        ${codeHtml}
        <div style="font-size: 0.88rem; margin-bottom: 8px; line-height: 1.6;">
          <div><strong>Vaše odpověď:</strong> <span style="color: ${isCorrect ? '#10b981' : '#ef4444'}; font-family: inherit; background: rgba(0,0,0,0.15); padding: 2px 6px; border-radius: 4px;">${userText}</span></div>
          ${!isCorrect ? `<div style="margin-top: 4px;"><strong>Správná odpověď:</strong> <span style="color: #10b981; font-family: inherit; background: rgba(16, 185, 129, 0.15); padding: 2px 6px; border-radius: 4px;">${correctText}</span></div>` : ''}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-secondary); background: rgba(0,0,0,0.1); padding: 10px 14px; border-radius: 6px; line-height: 1.55; border-left: 3px solid #10b981;">
          <strong style="color: #10b981;">Vysvětlení:</strong> ${explanationText}
        </div>
      `;

      list.appendChild(item);
    });
  }

  reviewMistakesOnly() {
    const mistakes = this.currentQuestions.filter(q => !this.isAnswerCorrect(q, this.userAnswers[q.id]));
    if (!mistakes.length) {
      alert('V tomto testu jste neměli žádnou chybu! Skvělá práce!');
      return;
    }
    this.currentQuestions = mistakes;
    this.currentIndex = 0;
    this.userAnswers = {};
    this.practiceEvaluated = {};
    this.flagged.clear();
    this.visited.clear();
    this.visited.add(0);
    this.switchView('practice');
  }

  /* ----------------------------------------------------
     PRACTICE MODE
     ---------------------------------------------------- */
  startPractice(filterMode = 'all') {
    const cert = CERTIFICATES_DATA[this.activeCert];
    let list = [...cert.questions];

    if (filterMode === 'mistakes') {
      const stats = this.getUserStats();
      const pMap = stats.practice?.questions || {};
      list = list.filter(q => pMap[q.id]?.lastResult === false);
    } else if (filterMode === 'unseen') {
      const stats = this.getUserStats();
      const pMap = stats.practice?.questions || {};
      list = list.filter(q => !pMap[q.id]);
    }

    this.practiceFilterMode = filterMode;
    const baseList = list.length ? list : (cert?.questions ? [...cert.questions] : []);
    this.currentQuestions = this.prepareQuestions(baseList, this.prefShuffleQ, this.prefShuffleOpt);
    this.currentIndex = 0;
    this.userAnswers = {};
    this.practiceEvaluated = {};
    this.flagged.clear();
    this.visited.clear();
    this.visited.add(0);

    const modSelect = document.getElementById('practiceFilterSelect');
    if (modSelect && modSelect.value !== filterMode) {
      modSelect.value = filterMode;
    }

    this.updatePracticeLiveStats();
    this.renderQuestion();
  }

  updatePracticeLiveStats() {
    const stats = this.getUserStats();
    const pData = stats.practice?.certs?.[this.activeCert] || { correct: 0, total: 0 };
    const rate = pData.total > 0 ? Math.round((pData.correct / pData.total) * 100) : 0;

    const elCor = document.getElementById('plsCorrectVal');
    const elWrn = document.getElementById('plsWrongVal');
    const elRt = document.getElementById('plsRateVal');

    if (elCor) elCor.textContent = pData.correct;
    if (elWrn) elWrn.textContent = (pData.total - pData.correct);
    if (elRt) elRt.textContent = `${rate} %`;
  }

  /* ----------------------------------------------------
     QUESTION RENDERING
     ---------------------------------------------------- */
  renderQuestion() {
    const container = document.getElementById('optionsContainer');
    const confirmWrap = document.getElementById('multiConfirmWrap');

    if (!this.currentQuestions.length) {
      document.getElementById('qNumberTitle').textContent = 'Žádné otázky';
      document.getElementById('qCounterDisplay').textContent = '0 z 0 otázek';
      document.getElementById('qCountText').textContent = '0 / 0';
      document.getElementById('examProgressBar').style.width = '0%';
      
      document.getElementById('qText').innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem;">
          <i class="fas fa-folder-open" style="font-size: 3rem; color: #64748b; margin-bottom: 1rem; display: block;"></i>
          <h3 style="margin-bottom: 0.5rem; font-size: 1.25rem;">Pro tento kurz zatím nebyly nahrány otázky</h3>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1.5rem auto; line-height: 1.6; font-size: 0.92rem;">
            Závěrečný test pro <strong>HTML Essentials</strong> má k dispozici všech 40 autentických testových otázek.
          </p>
          <button class="btn-primary" style="margin: 0 auto;" onclick="app.loadCertificate('html')">
            <i class="fab fa-html5"></i> Přepnout na HTML Essentials (40 otázek)
          </button>
        </div>
      `;
      document.getElementById('qCodeBlock').style.display = 'none';
      if (container) container.innerHTML = '';
      if (confirmWrap) { confirmWrap.style.display = 'none'; confirmWrap.innerHTML = ''; }
      document.getElementById('explanationBox').classList.remove('show');
      this.renderQuestionStrip();
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;

    this.visited.add(this.currentIndex);

    // Number & Title
    document.getElementById('qNumberTitle').textContent = `Otázka ${this.currentIndex + 1}`;
    document.getElementById('qCounterDisplay').textContent = `${this.currentIndex + 1} z ${total} otázek`;
    document.getElementById('qCountText').textContent = `${this.currentIndex + 1} / ${total}`;
    
    const pct = Math.round(((this.currentIndex + 1) / total) * 100);
    document.getElementById('examProgressBar').style.width = `${pct}%`;

    document.getElementById('qText').textContent = q.question;

    // Question Type Hint
    const isMulti = Array.isArray(q.correct);
    const reqCount = isMulti ? q.correct.length : 1;
    const qHintEl = document.getElementById('qTypeHint');
    const userPick = this.userAnswers[q.id];

    if (qHintEl) {
      if (isMulti) {
        let hintLabel = reqCount >= 5 ? `Vyberte ${reqCount} odpovědí` : `Vyberte ${reqCount} odpovědi`;
        const currentCount = Array.isArray(userPick) ? userPick.length : 0;
        qHintEl.innerHTML = `<i class="fas fa-check-square"></i> ${hintLabel} <span class="q-selection-count">(${currentCount}/${reqCount})</span>`;
        qHintEl.classList.add('multi');
      } else {
        qHintEl.innerHTML = `<i class="far fa-dot-circle"></i> Jedna správná odpověď`;
        qHintEl.classList.remove('multi');
      }
    }

    // Code Block
    const codeBlock = document.getElementById('qCodeBlock');
    if (q.code) {
      codeBlock.textContent = q.code;
      codeBlock.style.display = 'block';
    } else {
      codeBlock.style.display = 'none';
    }

    // Update Flag UI
    this.updateFlagUI();

    // Render Option Cards
    container.innerHTML = '';
    const isPractice = this.activeMode === 'practice';
    const isEvaluated = isPractice ? Boolean(this.practiceEvaluated[q.id]) : false;

    const optLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    q.options.forEach((optText, optIdx) => {
      const optCard = document.createElement('div');
      optCard.className = 'option-card';
      if (isMulti) optCard.classList.add('multi-choice');

      const isSelected = isMulti
        ? (Array.isArray(userPick) && userPick.includes(optIdx))
        : (userPick === optIdx);

      if (isSelected) {
        optCard.classList.add('selected');
      }

      let badgeContent = optLetters[optIdx] || (optIdx + 1);
      let missedTag = '';

      if (isPractice && isEvaluated) {
        const isOptCorrect = isMulti ? q.correct.includes(optIdx) : (optIdx === q.correct);

        if (isOptCorrect && isSelected) {
          optCard.classList.add('correct');
          badgeContent = '<i class="fas fa-check"></i>';
        } else if (isSelected && !isOptCorrect) {
          optCard.classList.add('incorrect');
          badgeContent = '<i class="fas fa-times"></i>';
        } else if (isOptCorrect && !isSelected) {
          optCard.classList.add('correct', 'correct-missed');
          badgeContent = '<i class="fas fa-check"></i>';
          missedTag = `<span class="badge-missed"><i class="fas fa-info-circle"></i> Chybějící správná volba</span>`;
        }
      } else if (isSelected && isMulti) {
        badgeContent = '<i class="fas fa-check"></i>';
      }

      optCard.innerHTML = `
        <div class="opt-badge ${isMulti ? 'square' : 'round'}">${badgeContent}</div>
        <div class="opt-text">${this.escapeHtml(optText)}</div>
        ${missedTag}
      `;

      optCard.addEventListener('click', () => {
        this.selectOption(optIdx);
      });

      container.appendChild(optCard);
    });

    // Practice Multi-Answer Confirm Button
    if (confirmWrap) {
      if (isPractice && isMulti && !isEvaluated) {
        confirmWrap.style.display = 'flex';
        const currentPicks = Array.isArray(userPick) ? userPick : [];
        const diff = reqCount - currentPicks.length;
        const canConfirm = currentPicks.length === reqCount;

        let btnLabel = '';
        if (canConfirm) {
          btnLabel = `<i class="fas fa-check-double"></i> Zkontrolovat odpověď (vybráno ${currentPicks.length} z ${reqCount})`;
        } else {
          const word = diff === 1 ? 'odpověď' : (diff < 5 ? 'odpovědi' : 'odpovědí');
          btnLabel = `<i class="fas fa-hand-pointer"></i> Vyberte ještě ${diff} ${word}`;
        }

        confirmWrap.innerHTML = `
          <button class="btn-check-multi ${canConfirm ? 'active' : ''}" id="btnConfirmMulti" ${canConfirm ? '' : 'disabled'}>
            ${btnLabel}
          </button>
        `;

        const btn = document.getElementById('btnConfirmMulti');
        if (btn && canConfirm) {
          btn.addEventListener('click', () => {
            this.confirmPracticeAnswer();
          });
        }
      } else {
        confirmWrap.style.display = 'none';
        confirmWrap.innerHTML = '';
      }
    }

    // Explanation Box (In Practice Mode)
    const expBox = document.getElementById('explanationBox');
    const expText = document.getElementById('explanationText');
    const fbIcon = document.getElementById('fbStatusIcon');
    const fbStatusText = document.getElementById('fbStatusText');

    if (isPractice && isEvaluated) {
      const isCorrect = this.isAnswerCorrect(q, userPick);
      expText.textContent = q.explanation;
      if (fbIcon) {
        fbIcon.className = isCorrect ? 'fas fa-check-circle' : 'fas fa-times-circle';
        fbIcon.style.color = isCorrect ? '#10b981' : '#ef4444';
      }
      if (fbStatusText) {
        fbStatusText.textContent = isCorrect ? 'Správná odpověď!' : 'Chybná odpověď!';
        fbStatusText.style.color = isCorrect ? '#10b981' : '#ef4444';
      }
      expBox.classList.remove('correct', 'incorrect');
      expBox.classList.add(isCorrect ? 'correct' : 'incorrect');
      expBox.classList.add('show');
      setTimeout(() => {
        if (expBox.scrollIntoView) {
          expBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    } else {
      expBox.classList.remove('show', 'correct', 'incorrect');
    }

    // Prev / Next button state
    const prevBtn = document.getElementById('canvasPrevBtn');
    const nextBtn = document.getElementById('canvasNextBtn');
    if (prevBtn) prevBtn.disabled = (this.currentIndex === 0);
    if (nextBtn) nextBtn.disabled = (this.currentIndex === total - 1);

    // Render Question Strip
    this.renderQuestionStrip();
  }

  selectOption(optIdx) {
    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;

    const isPractice = this.activeMode === 'practice';
    const isMulti = Array.isArray(q.correct);
    const reqCount = isMulti ? q.correct.length : 1;

    if (isPractice && this.practiceEvaluated[q.id]) {
      return;
    }

    if (!isMulti) {
      this.userAnswers[q.id] = optIdx;
      if (isPractice) {
        this.practiceEvaluated[q.id] = true;
        const isCorrect = optIdx === q.correct;
        if (isCorrect) {
          this.sound.correct();
        } else {
          this.sound.wrong();
        }
        this.recordPracticeResult(this.activeCert, q.id, isCorrect);
        this.updatePracticeLiveStats();
      } else {
        this.sound.click();
      }
    } else {
      let current = Array.isArray(this.userAnswers[q.id]) ? [...this.userAnswers[q.id]] : [];
      const existsIdx = current.indexOf(optIdx);

      if (existsIdx >= 0) {
        current.splice(existsIdx, 1);
      } else {
        if (current.length < reqCount) {
          current.push(optIdx);
        } else {
          current.shift();
          current.push(optIdx);
        }
      }
      current.sort((a, b) => a - b);
      this.userAnswers[q.id] = current;
      this.sound.click();
    }

    this.renderQuestion();
  }

  confirmPracticeAnswer() {
    const q = this.currentQuestions[this.currentIndex];
    if (!q) return;
    const isMulti = Array.isArray(q.correct);
    const reqCount = isMulti ? q.correct.length : 1;
    const current = Array.isArray(this.userAnswers[q.id]) ? this.userAnswers[q.id] : [];

    if (isMulti && current.length !== reqCount) return;

    this.practiceEvaluated[q.id] = true;
    const isCorrect = this.isAnswerCorrect(q, this.userAnswers[q.id]);

    if (isCorrect) {
      this.sound.correct();
    } else {
      this.sound.wrong();
    }

    this.recordPracticeResult(this.activeCert, q.id, isCorrect);
    this.updatePracticeLiveStats();
    this.renderQuestion();
  }

  renderQuestionStrip() {
    const strip = document.getElementById('ciscoQuestionStrip');
    if (!strip) return;

    strip.innerHTML = '';
    this.currentQuestions.forEach((q, idx) => {
      const pill = document.createElement('div');
      pill.className = 'q-btn';
      pill.textContent = `${idx + 1}`;
      pill.title = `Otázka ${idx + 1}`;

      const isAnswered = this.isQuestionAnswered(q, this.userAnswers[q.id]);

      if (idx === this.currentIndex) {
        pill.classList.add('active');
      } else if (isAnswered) {
        pill.classList.add('answered');
      } else if (this.flagged.has(q.id)) {
        pill.classList.add('flagged');
      }

      pill.addEventListener('click', () => {
        this.sound.click();
        this.currentIndex = idx;
        this.renderQuestion();
      });

      strip.appendChild(pill);
    });

    const activePill = strip.children[this.currentIndex];
    if (activePill && activePill.scrollIntoView) {
      activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  updateFlagUI() {
    const btn = document.getElementById('flagQuestionBtn');
    const text = document.getElementById('flagBtnText');
    if (!btn) return;

    if (!this.currentQuestions.length) {
      btn.classList.remove('flagged');
      return;
    }

    const q = this.currentQuestions[this.currentIndex];
    const isFlagged = this.flagged.has(q.id);

    btn.classList.toggle('flagged', isFlagged);
    if (text) text.textContent = isFlagged ? 'Označeno' : 'Označit';
  }

  escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  /* ----------------------------------------------------
     CHEATSHEETS DATA
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
      ],

      linux: [
        {
          title: "Navigace & Souborový systém (FHS)",
          rows: [
            ["pwd & cd", "cd ~ (domov), cd .. (o úroveň výš), cd - (předchozí adresář), pwd (aktuální cesta)"],
            ["/bin & /sbin", "Základní binárky; /sbin obsahuje příkazy vyhrazené pro správce root"],
            ["/etc & /var", "/etc (systémové konfigurační textové soubory); /var (proměnná data, logy, spooly)"],
            ["/dev & /proc", "/dev (speciální soubory zařízení); /proc (virtuální pseudo-FS stavu jádra a procesů)"],
            ["ls přepínače", "ls -l (dlouhý výpis), -a (včetně skrytých . souborů), -h (čitelné velikosti), -R (rekurzivní)"]
          ]
        },
        {
          title: "Manipulace se soubory & Vyhledávání",
          rows: [
            ["cp, mv, rm", "cp -r (rekurze pro adresáře), mv (přesun/přejmenování), rm -r -f (nucené smazání)"],
            ["mkdir & rmdir", "mkdir -p (vytvoření celé stromové cesty); rmdir (maže pouze prázdný adresář)"],
            ["Hard link vs Symlink", "ln src dst (hard link sdílí stejný inode); ln -s src dst (symlink ukazuje na cestu)"],
            ["grep regulární výrazy", "grep -i (nerozlišuje velikost), -v (invertuje výběr / vylučuje řádky), -r (rekurzivní prohledání)"],
            ["Metaznaky (Wildcards)", "* (libovolný počet znaků), ? (právě jeden znak), [abc] (jeden ze znaků v závorce)"]
          ]
        },
        {
          title: "I/O Přesměrování, Rourování & Archivace",
          rows: [
            ["> a >> (Stdout)", "> přepíše cílový soubor novým výstupem; >> připojí výstup na konec souboru (append)"],
            ["2> a 2>&1 (Stderr)", "2> přesměruje chybový výstup; 2>&1 sloučí chybový výstup se standardním výstupem"],
            ["< (Stdin)", "Přesměruje obsah souboru na standardní vstup příkazu (cmd < file)"],
            ["| (Pipeline / Roura)", "Předá standardní výstup prvního příkazu na standardní vstup druhého (cmd1 | cmd2)"],
            ["tar archivace", "tar -czvf arch.tar.gz dir (c=create, z=gzip, v=verbose, f=file); tar -xzvf (x=extract)"],
            ["gzip & bzip2", "gzip komprimuje do .gz a smaže originál; bzip2 nabízí vyšší kompresní poměr (.bz2)"]
          ]
        },
        {
          title: "Uživatelská oprávnění (chmod/chown) & Správa",
          rows: [
            ["Struktura práv (rwx)", "3 trojice: vlastník (user), skupina (group), ostatní (others); r=4, w=2, x=1"],
            ["chmod osmičkově", "chmod 755 (rwxr-xr-x: vlastník vše, ostatní čtení a spouštění); chmod 644 (rw-r--r--)"],
            ["chmod symbolicky", "chmod u+x, g-w, o=r (přidání/odebrání práv pro jednotlivé třídy)"],
            ["chown & chgrp", "chown user:group soubor (změna vlastníka a skupiny); chgrp jen skupiny"],
            ["/etc/passwd & /etc/shadow", "/etc/passwd (účty, UID, GID, shell - čitelný všem); /etc/shadow (hashe hesel - jen root)"],
            ["ps, top & free", "ps aux (všechny běžící procesy), top (interaktivní monitor), free -m (stav RAM)"]
          ]
        }
      ],

      ccna_srwe: [
        {
          title: "Přepínání, VLANy & 802.1Q Trunking",
          rows: [
            ["switchport mode access", "Přiřadí port do jedné konkrétní VLAN: switchport access vlan <id>"],
            ["switchport mode trunk", "Nastaví port jako 802.1Q trunk nesoucí provoz více VLAN najednou"],
            ["802.1Q Native VLAN", "Přenáší netagovaný provoz; na obou stranách trunku MUSÍ být stejná (mismatch error)"],
            ["Router-on-a-Stick", "Konfigurace subrozhraní (g0/0.10) s příkazem encapsulation dot1Q 10"],
            ["SVI (Switch Virtual Interface)", "Virtuální IP rozhraní přepínače (interface vlan 1) pro management / směrování"]
          ]
        },
        {
          title: "Spanning Tree Protocol (STP & RSTP)",
          rows: [
            ["Bridge ID (BID)", "Priorita (4 bity) + Sys-ID-Ext VLAN ID (12 bitů) + MAC adresa přepínače (48 bitů)"],
            ["Výběr Root Bridge", "Přepínač s nejnižším BID (výchozí priorita 32768, ladí se v krocích po 4096)"],
            ["STP stavy (802.1D)", "Blocking -> Listening -> Learning -> Forwarding (konvergence trvá až 50 s)"],
            ["RSTP stavy (802.1w)", "Discarding -> Learning -> Forwarding (blesková konvergence během milisekund)"],
            ["PortFast & BPDU Guard", "PortFast okamžitě zapíná access port; BPDU Guard jej při příjmu BPDU vypne (err-disable)"]
          ]
        },
        {
          title: "EtherChannel & Zabezpečení LAN (L2 Security)",
          rows: [
            ["LACP vs PAgP", "LACP (IEEE 802.3ad standard: active/passive); PAgP (Cisco proprietární: desirable/auto)"],
            ["channel-group mode active", "Vytvoří EtherChannel bundle rozhraní port-channel <id> řízené protokolem LACP"],
            ["Port Security", "switchport port-security mac-address sticky; omezení počtu MAC (maximum <n>)"],
            ["Violation módy", "protect (zahazuje), restrict (zahazuje + loguje), shutdown (vypne port do err-disable)"],
            ["DHCP Snooping & DAI", "DHCP Snooping filtruje falešné servery (trusted/untrusted); DAI brání ARP spoofingu"]
          ]
        },
        {
          title: "DHCPv4, SLAAC & Bezdrátové sítě (WLAN/WLC)",
          rows: [
            ["ip helper-address <ip>", "Příkaz na rozhraní směrovače pro převod broadcast DHCP Discover na unicast serveru"],
            ["SLAAC vs DHCPv6", "SLAAC využívá ICMPv6 Router Advertisement (prefix /64); Stateful DHCPv6 přiděluje plné IP"],
            ["CAPWAP Protokol", "Tuneluje řízení (UDP 5246) a data (UDP 5247) mezi Lightweight AP (LAP) a kontrolérem WLC"],
            ["WLC Konfigurace WLAN", "Mapování SSID na VLAN rozhraní, zabezpečení WPA2/WPA3 Enterprise (802.1X/RADIUS)"],
            ["Statické směrování", "ip route prefix mask next-hop [ad] (plovoucí routa má vyšší AD než dynamický protokol)"]
          ]
        }
      ],

      devnet: [
        {
          title: "REST API, HTTP Metody & Stavové kódy",
          rows: [
            ["GET", "Čtení dat z API (Idempotentní, bezpečné, tělo se neposílá)"],
            ["POST", "Vytvoření nového zdroje (Neidempotentní, vrací 201 Created s Location)"],
            ["PUT", "Kompletní nahrazení / přepsání zdroje (Idempotentní)"],
            ["PATCH", "Dílčí / částečná úprava existujícího zdroje"],
            ["DELETE", "Smazání zdroje ze serveru (204 No Content nebo 200 OK)"],
            ["200 OK / 201 Created", "Úspěšný požadavek / Úspěšně vytvořený zdroj"],
            ["400 Bad Request", "Chybná syntaxe, nevalidní JSON nebo chybějící parametr"],
            ["401 vs 403", "401 Unauthorized = chybí/neplatný token; 403 Forbidden = identita známa, ale nemá práva"],
            ["404 Not Found", "Cílové URI neexistuje; 429 Too Many Requests = překročen rate limit"]
          ]
        },
        {
          title: "Formáty dat (JSON, YAML, XML) & Python Knihovny",
          rows: [
            ["JSON syntax", "Objekty v {}, pole v [], klíče VŽDY ve dvojitých uvozovkách \"key\": \"val\""],
            ["YAML syntax", "Hierarchie pomocí mezer (nikdy tabulátory!), seznamy začínají pomlčkou '-'"],
            ["json.loads() vs json.dumps()", "loads = parsování JSON stringu na Python dict; dumps = serializace dict do stringu"],
            ["requests knihovna", "requests.get(url, headers={'Authorization': 'Bearer ...'}, params=...)"],
            ["response.json()", "Převede JSON odpověď ze serveru přímo na Python slovník"]
          ]
        },
        {
          title: "Verzování kódu (Git) & CI/CD",
          rows: [
            ["git clone <url>", "Stáhne vzdálený repozitář na lokální disk"],
            ["git checkout -b <branch>", "Vytvoří novou větev a okamžitě se do ní přepne"],
            ["git add . & commit -m", "Přenese změny do staging area a vytvoří lokální commit"],
            ["git merge <branch>", "Sloučí specifikovanou větev do aktuální aktivní větve"],
            ["CI/CD Pipeline", "Continuous Integration (automatické testy/linty), Continuous Delivery / Deployment (nasazení)"]
          ]
        },
        {
          title: "Kontejnery (Docker) & Zabezpečení aplikací",
          rows: [
            ["Dockerfile instrukce", "FROM (bázový image), RUN (instalace balíčků), COPY (přenos souborů), CMD (spouštěcí příkaz)"],
            ["docker build -t app:1.0 .", "Sestaví kontejnerový image s tagem z aktuálního adresáře"],
            ["docker run -d -p 8080:80", "Spustí kontejner na pozadí (-d) s mapováním portu hostitele 8080 na 80 kontejneru"],
            ["OWASP Top 10", "SQL Injection (ošetření: parametrizované dotazy), XSS, CSRF (ochrana: CSRF tokeny)"],
            ["OAuth 2.0 flow", "Získání Access Tokenu (Bearer token) bez předávání hesel třetím stranám"]
          ]
        },
        {
          title: "Programovatelnost sítě, NETCONF, RESTCONF & YANG",
          rows: [
            ["YANG datový model", "Definuje strukturu dat (list, container, leaf, leaf-list), stavová i konfigurační data"],
            ["NETCONF (RFC 6241)", "Výměna XML zpráv přes SSH na portu 830; operace <get>, <get-config>, <edit-config>"],
            ["RESTCONF (RFC 8040)", "RESTful rozhraní pro YANG modely přes HTTPS (JSON nebo XML) na portu 443"],
            ["RESTCONF kořenové URI", "https://<ip>/restconf/data/... (data) nebo /operations/... (RPCs)"],
            ["Ansible Playbook", "Deklarativní YAML soubor spouštěný přes SSH bez nutnosti agenta (Agentless)"],
            ["Cisco Platforms", "Cisco Catalyst Center (DNA-C), Meraki Dashboard API, Webex API, Cisco ACI"]
          ]
        }
      ],
      ccna_itn: [
        {
          title: "Modely OSI & TCP/IP a Základní Cisco IOS",
          rows: [
            ["PDU vrstev OSI", "L4 = Segment, L3 = Paket (Packet), L2 = Rámec (Frame), L1 = Bity (Bits)"],
            ["Režimy Cisco IOS", "User EXEC (>), Privileged EXEC (#, enable), Global Config ((config)#)"],
            ["Zabezpečení hesel", "enable secret <pwd> (MD5/SHA hash); service password-encryption (Type 7)"],
            ["Linky Console a VTY", "line con 0 / line vty 0 4 -> password <pwd> -> login (aktivuje výzvu)"],
            ["Ukládání konfigurace", "copy running-config startup-config (uloží stav z RAM do NVRAM)"]
          ]
        },
        {
          title: "Fyzická vrstva, Ethernet & Přepínání (L2)",
          rows: [
            ["Struktura MAC adresy", "48 bitů (12 hex znaků): prvních 24 bitů = OUI výrobce (IEEE), zbylých 24 bitů = sériové číslo"],
            ["Velikost Ethernet rámce", "Minimálně 64 B (menší jsou runt frames a zahazují se), max 1518 B (větší jsou giants)"],
            ["Store-and-Forward vs Cut-Through", "Store-and-Forward kontroluje FCS (bezchybovost); Cut-Through začne přeposílat ihned (nejnižší latence)"],
            ["Unknown Unicast Flooding", "Neznámou cílovou MAC přepínač zaplaví všemi porty v dané VLAN kromě příchozího"],
            ["Auto-MDIX", "Automaticky detekuje a prohodí Tx/Rx páry; umožňuje přímý i křížený UTP kabel"]
          ]
        },
        {
          title: "Síťová vrstva, IPv4 Adresace & Subnetting",
          rows: [
            ["Vlastnosti IP protokolu", "Connectionless (nespojovaný), Best-effort (nespolehlivý), Media-independent"],
            ["IPv4 TTL (Time to Live)", "Směrovač sníží TTL o 1; při TTL=0 paket zahodí a vrátí ICMP Time Exceeded (traceroute)"],
            ["Privátní rozsahy (RFC 1918)", "10.0.0.0/8, 172.16.0.0/12 (do 172.31.255.255), 192.168.0.0/16; APIPA: 169.254.0.0/16"],
            ["Výchozí brána (Default GW)", "Směrovač pro odchozí provoz mimo lokální síť; v rámci LAN komunikace funguje i bez brány"],
            ["ARP (Address Resolution)", "Request je broadcast (FF:FF:FF:FF:FF:FF); Reply je unicast přímo tazateli"]
          ]
        },
        {
          title: "IPv6, Transportní vrstva (TCP/UDP) & Aplikační služby",
          rows: [
            ["Komprese IPv6", "Vynechání úvodních nul ve skupině; '::' nahradí souvislé bloky nul (pouze jednou v adrese)"],
            ["Prefixy IPv6", "FE80::/10 (Link-Local), 2000::/3 (Global Unicast - GUA), FC00::/7 (Unique Local)"],
            ["EUI-64 proces", "Vloží FFFE doprostřed 48bit MAC a invertuje 7. bit prvního bajtu (Universal/Local bit)"],
            ["TCP 3-Way Handshake", "SYN -> SYN-ACK -> ACK; TCP Window Size reguluje řízení toku (flow control)"],
            ["Klíčové porty", "DNS (53), DHCP (67/68 - DORA proces), HTTP (80), HTTPS (443), SSH (22), Telnet (23)"]
          ]
        }
      ]
    };
  }

  renderCheatsheet() {
    const container = document.getElementById('cheatsheetContainer');
    const title = document.getElementById('cheatsheetTitle');
    const cert = CERTIFICATES_DATA[this.activeCert];

    if (title && cert) {
      title.textContent = `Oficiální tahák: ${cert.title}`;
    }

    // Reset search inputs on full render
    const sInput = document.getElementById('cheatsheetSearchInput');
    const clearBtn = document.getElementById('clearCheatSearchBtn');
    const emptyState = document.getElementById('cheatEmptySearch');
    if (sInput) sInput.value = '';
    if (clearBtn) clearBtn.style.display = 'none';
    if (emptyState) emptyState.style.display = 'none';

    if (!container) return;
    container.innerHTML = '';

    const cards = this.cheats[this.activeCert] || [];
    if (!cards.length) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
          <i class="fas fa-book" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
          Pro tento kurz zatím není k dispozici žádný specifický tahák.
        </div>
      `;
      return;
    }

    cards.forEach(c => {
      const cardEl = document.createElement('div');
      cardEl.className = 'cheat-card';
      
      let rowsHtml = '';
      if (c.rows) {
        rowsHtml = `
          <table class="cheat-table">
            ${c.rows.map(r => `
              <tr>
                <td>${this.escapeHtml(r[0])}</td>
                <td>${this.escapeHtml(r[1])}</td>
              </tr>
            `).join('')}
          </table>
        `;
      } else if (c.code) {
        rowsHtml = `<div class="cheat-code-block">${this.escapeHtml(c.code)}</div>`;
      }

      cardEl.innerHTML = `
        <h4><i class="fas fa-bookmark" style="color: var(--cisco-cyan);"></i> ${this.escapeHtml(c.title)}</h4>
        ${c.desc ? `<p>${this.escapeHtml(c.desc)}</p>` : ''}
        ${rowsHtml}
      `;

      container.appendChild(cardEl);
    });
  }

  filterCheatsheet(query) {
    const container = document.getElementById('cheatsheetContainer');
    const emptyState = document.getElementById('cheatEmptySearch');
    const clearBtn = document.getElementById('clearCheatSearchBtn');
    if (!container) return;

    const cards = container.querySelectorAll('.cheat-card');
    const cleanQ = (query || '').trim().toLowerCase();

    if (clearBtn) {
      clearBtn.style.display = cleanQ ? 'block' : 'none';
    }

    if (!cleanQ) {
      cards.forEach(card => {
        card.style.display = '';
        card.querySelectorAll('tr').forEach(tr => tr.style.display = '');
      });
      if (emptyState) emptyState.style.display = 'none';
      return;
    }

    let visibleCardsCount = 0;

    cards.forEach(card => {
      const cardTitle = (card.querySelector('h4')?.textContent || '').toLowerCase();
      const cardDesc = (card.querySelector('p')?.textContent || '').toLowerCase();
      const cardMatchesHeader = cardTitle.includes(cleanQ) || cardDesc.includes(cleanQ);

      const rows = card.querySelectorAll('tr');
      let matchingRowsCount = 0;

      if (rows.length > 0) {
        rows.forEach(tr => {
          const rowText = tr.textContent.toLowerCase();
          if (cardMatchesHeader || rowText.includes(cleanQ)) {
            tr.style.display = '';
            matchingRowsCount++;
          } else {
            tr.style.display = 'none';
          }
        });

        const showCard = cardMatchesHeader || matchingRowsCount > 0;
        card.style.display = showCard ? '' : 'none';
        if (showCard) visibleCardsCount++;
      } else {
        const fullText = card.textContent.toLowerCase();
        const showCard = fullText.includes(cleanQ);
        card.style.display = showCard ? '' : 'none';
        if (showCard) visibleCardsCount++;
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCardsCount === 0 ? 'block' : 'none';
    }
  }

  /* ----------------------------------------------------
     USER PROFILE & STATISTICS
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

  recordPracticeResult(certId, qId, isCorrect) {
    const stats = this.getUserStats();
    if (!stats.practice) stats.practice = { questions: {} };
    if (!stats.practice.questions) stats.practice.questions = {};

    const existing = stats.practice.questions[qId] || { attempts: 0, correct: 0, wrong: 0 };
    existing.attempts = (existing.attempts || 0) + 1;
    if (isCorrect) {
      existing.correct = (existing.correct || 0) + 1;
    } else {
      existing.wrong = (existing.wrong || 0) + 1;
    }
    existing.lastResult = isCorrect;
    existing.lastAttempt = Date.now();
    existing.certId = certId;

    stats.practice.questions[qId] = existing;
    this.saveUserStats(stats);
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
    const select = document.getElementById('practiceFilterSelect');
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

    if (Array.from(select.options).some(o => o.value === currentVal)) {
      select.value = currentVal;
    }
  }

  switchStatsSubtab(subtab) {
    if (subtab === 'traffic' && !this.isAdmin()) {
      subtab = 'overview';
    }

    document.querySelectorAll('.stats-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subtab === subtab);
    });

    const panels = {
      overview: document.getElementById('subtabOverview'),
      practice: document.getElementById('subtabPractice'),
      exams: document.getElementById('subtabExams'),
      traffic: document.getElementById('subtabTraffic')
    };

    Object.entries(panels).forEach(([k, el]) => {
      if (el) {
        el.style.display = (k === subtab) ? 'block' : 'none';
        el.classList.toggle('active', k === subtab);
      }
    });

    if (subtab === 'traffic' && this.isAdmin()) {
      this.loadTrafficData();
    }
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

    // Group certificates by categories
    Object.entries(CERTIFICATE_CATEGORIES).forEach(([catId, catInfo]) => {
      const groupSection = document.createElement('div');
      groupSection.className = 'practice-cat-group-section';
      groupSection.innerHTML = `
        <div class="practice-cat-header">
          <div class="practice-cat-title">
            <i class="${catInfo.icon}" style="color: ${catInfo.color};"></i>
            <h4>${this.escapeHtml(catInfo.name)}</h4>
          </div>
          <span class="practice-cat-desc">${this.escapeHtml(catInfo.description)}</span>
        </div>
        <div class="practice-cat-grid"></div>
      `;

      const subGrid = groupSection.querySelector('.practice-cat-grid');

      catInfo.certs.forEach(certId => {
        const cert = CERTIFICATES_DATA[certId];
        if (!cert) return;

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

        subGrid.appendChild(card);
      });

      grid.appendChild(groupSection);
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

      let codeHtml = q.code ? `<div class="code-block" style="margin: 6px 0; font-size: 0.82rem;">${this.escapeHtml(q.code)}</div>` : '';

      card.innerHTML = `
        <div class="mistake-header">
          <span style="font-size: 0.78rem; font-weight: 700; color: ${cert.color}; display: flex; align-items: center; gap: 6px;">
            <i class="${cert.icon}"></i> ${this.escapeHtml(cert.title)}
          </span>
          <button class="btn btn-sm btn-secondary" onclick="app.practiceSingleQuestion('${certId}', '${q.id}')">
            <i class="fas fa-play"></i> Znovu procvičit
          </button>
        </div>
        <div class="mistake-qtext">${this.escapeHtml(q.question)}</div>
        ${codeHtml}
        <div class="mistake-correct-box">
          <strong style="color: #10b981;"><i class="fas fa-check"></i> Správné řešení:</strong> ${this.getCorrectAnswerText(q)}
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
    const select = document.getElementById('practiceFilterSelect');
    if (select) select.value = filterMode;
  }

  practiceActiveCertMistakes() {
    this.sound.click();
    this.switchView('practice');
    this.startPractice('mistakes');
    const select = document.getElementById('practiceFilterSelect');
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
    this.practiceEvaluated = {};
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
  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

// Initialize Application when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new NetAcadApp();
  window.app = app;
});
