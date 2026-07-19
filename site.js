// Moteur du site : masque les corrigés, construit le quiz, gère le menu mobile.
document.addEventListener('DOMContentLoaded', function () {

  // --- 1. Corrigés masqués derrière un bouton ---
  var banner = document.querySelector('.corriges-banner');
  if (banner) {
    var section = banner.closest('.corriges-start') || banner.parentElement;
    section.style.display = 'none';
    var btn = document.createElement('button');
    btn.className = 'quiz-reset';
    btn.style.margin = '8px 0 4px';
    btn.textContent = '▸ Afficher les corrigés';
    btn.onclick = function () {
      var hidden = section.style.display === 'none';
      section.style.display = hidden ? 'block' : 'none';
      btn.textContent = (hidden ? '▾ Masquer les corrigés' : '▸ Afficher les corrigés');
    };
    section.parentNode.insertBefore(btn, section);
  }

  // --- 2. Quiz de fin de chapitre ---
  var mod = document.body.getAttribute('data-module');
  var mount = document.getElementById('quiz-mount');
  if (mount && mod && typeof QUIZZES !== 'undefined' && QUIZZES[mod] && QUIZZES[mod].length) {
    buildQuiz(mount, QUIZZES[mod]);
  }

  // --- 3. Menu mobile ---
  var toggle = document.getElementById('menu-toggle');
  if (toggle) {
    toggle.onclick = function () {
      document.querySelector('.sidebar').classList.toggle('open');
    };
  }
});

function buildQuiz(mount, questions) {
  var quiz = document.createElement('div');
  quiz.className = 'quiz';
  quiz.innerHTML =
    '<p class="quiz-head">Quiz de fin de chapitre</p>' +
    '<p class="quiz-sub">' + questions.length + ' questions · une seule bonne réponse · correction immédiate</p>' +
    '<div class="quiz-questions"></div>' +
    '<div class="quiz-score"></div>' +
    '<button class="quiz-reset quiz-reset-btn" style="display:none">↺ Recommencer le quiz</button>';
  mount.appendChild(quiz);

  var box = quiz.querySelector('.quiz-questions');
  var scoreEl = quiz.querySelector('.quiz-score');
  var resetBtn = quiz.querySelector('.quiz-reset-btn');
  var answered = 0, score = 0;

  questions.forEach(function (item, i) {
    var q = document.createElement('div');
    q.className = 'q';
    q.innerHTML = '<div class="q-num">Question ' + (i + 1) + ' / ' + questions.length + '</div>' +
                  '<div class="q-text">' + item.q + '</div>';
    item.options.forEach(function (opt, j) {
      var b = document.createElement('button');
      b.className = 'opt';
      b.innerHTML = opt + '<span class="tick"></span>';
      b.onclick = function () { choose(q, item, j); };
      q.appendChild(b);
    });
    var ex = document.createElement('div');
    ex.className = 'q-explain';
    ex.innerHTML = '<b>Explication : </b>' + item.explain;
    q.appendChild(ex);
    box.appendChild(q);
  });

  if (window.renderMathInElement) renderMathInElement(quiz);

  function choose(qEl, item, j) {
    if (qEl.dataset.done) return;
    qEl.dataset.done = '1';
    var opts = qEl.querySelectorAll('.opt');
    opts.forEach(function (o, k) {
      o.disabled = true;
      if (k === item.correct) { o.classList.add('correct'); o.querySelector('.tick').textContent = '✓'; }
      if (k === j && j !== item.correct) { o.classList.add('wrong'); o.querySelector('.tick').textContent = '✗'; }
    });
    qEl.querySelector('.q-explain').classList.add('show');
    if (j === item.correct) score++;
    answered++;
    if (answered === questions.length) showScore();
  }

  function showScore() {
    var n = questions.length, msg;
    if (score === n) msg = 'Score parfait : ' + score + ' / ' + n + ' 🎉 Chapitre maîtrisé !';
    else if (score >= n - 2) msg = 'Score : ' + score + ' / ' + n + ' — presque parfait, relis les points ratés.';
    else msg = 'Score : ' + score + ' / ' + n + ' — reprends le cours avant de refaire le quiz.';
    scoreEl.textContent = msg;
    scoreEl.classList.add('show');
    resetBtn.style.display = 'inline-block';
  }

  resetBtn.onclick = function () {
    answered = 0; score = 0;
    scoreEl.classList.remove('show');
    resetBtn.style.display = 'none';
    box.querySelectorAll('.q').forEach(function (q) {
      delete q.dataset.done;
      q.querySelectorAll('.opt').forEach(function (o) {
        o.disabled = false; o.className = 'opt'; o.querySelector('.tick').textContent = '';
      });
      q.querySelector('.q-explain').classList.remove('show');
    });
    quiz.scrollIntoView({ behavior: 'smooth' });
  };
}
