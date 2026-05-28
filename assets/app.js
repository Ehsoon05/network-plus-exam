const PASS_MARK = 70;

const els = {
  setupView: document.querySelector("#setupView"),
  examView: document.querySelector("#examView"),
  resultView: document.querySelector("#resultView"),
  setupForm: document.querySelector("#setupForm"),
  questionCount: document.querySelector("#questionCount"),
  durationMinutes: document.querySelector("#durationMinutes"),
  examTitle: document.querySelector("#examTitle"),
  timer: document.querySelector("#timer"),
  answeredCount: document.querySelector("#answeredCount"),
  progressBar: document.querySelector("#progressBar"),
  questionMeta: document.querySelector("#questionMeta"),
  questionText: document.querySelector("#questionText"),
  optionsList: document.querySelector("#optionsList"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  resultBadge: document.querySelector("#resultBadge"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  scoreValue: document.querySelector("#scoreValue"),
  correctValue: document.querySelector("#correctValue"),
  wrongValue: document.querySelector("#wrongValue"),
  reviewWrongBtn: document.querySelector("#reviewWrongBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  reviewList: document.querySelector("#reviewList"),
};

const state = {
  questions: [],
  currentIndex: 0,
  answers: new Map(),
  timerId: null,
  endsAt: 0,
  latestResult: null,
};

function toPersianDigits(value) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, sort: crypto.getRandomValues(new Uint32Array(1))[0] }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function showView(view) {
  [els.setupView, els.examView, els.resultView].forEach((item) => item.classList.add("hidden"));
  view.classList.remove("hidden");
}

function startExam(event) {
  event.preventDefault();
  const count = Math.min(Math.max(Number(els.questionCount.value), 1), QUESTIONS.length);
  const minutes = Math.min(Math.max(Number(els.durationMinutes.value), 1), 240);

  state.questions = shuffle(QUESTIONS).slice(0, count);
  state.currentIndex = 0;
  state.answers = new Map();
  state.endsAt = Date.now() + minutes * 60 * 1000;
  state.latestResult = null;

  showView(els.examView);
  renderQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(state.timerId);
  updateTimer();
  state.timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const secondsLeft = Math.max(0, Math.ceil((state.endsAt - Date.now()) / 1000));
  els.timer.textContent = formatTime(secondsLeft);

  if (secondsLeft === 0) {
    finishExam();
  }
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  const selected = state.answers.get(question.id) || [];
  const isMultiple = question.answers.length > 1;
  const inputType = isMultiple ? "checkbox" : "radio";
  const inputName = `question-${question.id}`;

  els.examTitle.textContent = `سوال ${toPersianDigits(state.currentIndex + 1)} از ${toPersianDigits(state.questions.length)}`;
  els.questionMeta.textContent = isMultiple ? "Choose all correct answers" : "Choose one answer";
  els.questionText.textContent = question.question;
  els.optionsList.innerHTML = "";

  question.options.forEach((option) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = inputType;
    input.name = inputName;
    input.value = option.id;
    input.checked = selected.includes(option.id);
    input.addEventListener("change", () => saveAnswer(question, option.id, input.checked, isMultiple));

    const text = document.createElement("span");
    text.innerHTML = `<span class="option-key">${option.id}.</span> ${escapeHtml(option.text)}`;

    label.append(input, text);
    els.optionsList.append(label);
  });

  els.prevBtn.disabled = state.currentIndex === 0;
  els.nextBtn.disabled = state.currentIndex === state.questions.length - 1;
  els.answeredCount.textContent = toPersianDigits(state.answers.size);
  els.progressBar.style.width = `${((state.currentIndex + 1) / state.questions.length) * 100}%`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function saveAnswer(question, optionId, checked, isMultiple) {
  if (isMultiple) {
    const current = new Set(state.answers.get(question.id) || []);
    if (checked) {
      current.add(optionId);
    } else {
      current.delete(optionId);
    }
    if (current.size) {
      state.answers.set(question.id, [...current].sort());
    } else {
      state.answers.delete(question.id);
    }
  } else {
    state.answers.set(question.id, [optionId]);
  }
  els.answeredCount.textContent = toPersianDigits(state.answers.size);
}

function moveQuestion(step) {
  state.currentIndex = Math.min(Math.max(state.currentIndex + step, 0), state.questions.length - 1);
  renderQuestion();
}

function finishExam() {
  clearInterval(state.timerId);
  const results = state.questions.map((question) => {
    const selected = state.answers.get(question.id) || [];
    const correct = sameAnswers(selected, question.answers);
    return { question, selected, correct };
  });
  const correctCount = results.filter((item) => item.correct).length;
  const score = Math.round((correctCount / state.questions.length) * 100);
  const passed = score >= PASS_MARK;

  state.latestResult = { results, correctCount, score, passed };
  renderResult();
  showView(els.resultView);
}

function sameAnswers(selected, correct) {
  return selected.length === correct.length && selected.every((item, index) => item === correct[index]);
}

function renderResult() {
  const { results, correctCount, score, passed } = state.latestResult;
  const wrongCount = results.length - correctCount;

  els.resultBadge.className = `result-badge ${passed ? "pass" : "fail"}`;
  els.resultBadge.textContent = passed ? "قبول" : "مردود";
  els.resultTitle.textContent = passed ? "آزمون را قبول شدی" : "به ۷۰٪ نرسیدی";
  els.resultSummary.textContent = `برای قبولی باید حداقل ۷۰ از ۱۰۰ بگیری. نتیجه این آزمون: ${toPersianDigits(score)} از ۱۰۰.`;
  els.scoreValue.textContent = toPersianDigits(score);
  els.correctValue.textContent = toPersianDigits(correctCount);
  els.wrongValue.textContent = toPersianDigits(wrongCount);
  els.reviewList.classList.add("hidden");
  els.reviewList.innerHTML = "";
  els.reviewWrongBtn.disabled = wrongCount === 0;
}

function renderWrongAnswers() {
  const wrongItems = state.latestResult.results.filter((item) => !item.correct);
  els.reviewList.innerHTML = "";

  wrongItems.forEach(({ question, selected }) => {
    const item = document.createElement("article");
    item.className = "review-item";
    const selectedText = selected.length ? selected.join(", ") : "No answer";
    item.innerHTML = `
      <h3>Question ${question.id}: ${escapeHtml(question.question)}</h3>
      <p class="answer-row"><strong>Your answer:</strong> ${escapeHtml(selectedText)}</p>
      <p class="answer-row"><strong>Correct answer:</strong> ${escapeHtml(question.answers.join(", "))}</p>
    `;
    els.reviewList.append(item);
  });

  els.reviewList.classList.remove("hidden");
}

function resetExam() {
  clearInterval(state.timerId);
  els.reviewList.innerHTML = "";
  els.reviewList.classList.add("hidden");
  showView(els.setupView);
}

els.setupForm.addEventListener("submit", startExam);
els.prevBtn.addEventListener("click", () => moveQuestion(-1));
els.nextBtn.addEventListener("click", () => moveQuestion(1));
els.submitBtn.addEventListener("click", finishExam);
els.reviewWrongBtn.addEventListener("click", renderWrongAnswers);
els.restartBtn.addEventListener("click", resetExam);
