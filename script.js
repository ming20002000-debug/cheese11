// ============================================================
// 이상형 월드컵 진행 로직
// ============================================================
// 이 파일은 수정하지 않아도 됩니다. 콘텐츠를 바꾸고 싶다면 data.js를,
// 제목/라운드 옵션을 바꾸고 싶다면 config.js를 수정하세요.
// ============================================================

(function () {
  "use strict";

  // ---------- 기본 유틸 ----------

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function byGender(list, gender) {
    return list.filter((c) => c.gender === gender);
  }

  function teamCount(list) {
    return new Set(list.map((c) => c.name)).size;
  }

  function roundLabelOf(n) {
    if (n === 2) return "결승";
    if (n <= 1) return "우승";
    return `${n}강`;
  }

  function ytEmbedUrl(candidate) {
    const start = Number(candidate.start) || 0;
    return `https://www.youtube-nocookie.com/embed/${candidate.youtubeId}?rel=0&start=${start}`;
  }

  // ---------- 상태 ----------

  const state = {
    poolFemaleTotal: 0,
    poolMaleTotal: 0,
    roundParticipants: [],
    matches: [],
    matchIndex: 0,
    winners: [],
  };

  // ---------- 라운드(대결) 매칭 생성 ----------
  // 매 라운드마다 "여돌 vs 남돌" 매칭을 최대한 많이 만들고,
  // 인원수가 안 맞아 남는 인원만 동성끼리 붙인다.
  // 그마저도 홀수로 남으면 마지막 한 명은 자동으로 다음 라운드에 진출(부전승).
  function buildMatches(participants) {
    const females = shuffle(byGender(participants, "female"));
    const males = shuffle(byGender(participants, "male"));

    const crossCount = Math.min(females.length, males.length);
    const matches = [];

    // 여돌 vs 남돌 매칭에서는 항상 왼쪽 = 여돌, 오른쪽 = 남돌
    for (let i = 0; i < crossCount; i++) {
      matches.push({ left: females[i], right: males[i], sameGender: false });
    }

    const leftover = females.length > males.length
      ? females.slice(crossCount)
      : males.slice(crossCount);

    const shuffledLeftover = shuffle(leftover);
    const byes = [];

    for (let i = 0; i + 1 < shuffledLeftover.length; i += 2) {
      matches.push({ left: shuffledLeftover[i], right: shuffledLeftover[i + 1], sameGender: true });
    }
    if (shuffledLeftover.length % 2 === 1) {
      byes.push(shuffledLeftover[shuffledLeftover.length - 1]);
    }

    return { matches: shuffle(matches), byes };
  }

  // ---------- 화면 전환 ----------

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((el) => {
      el.classList.toggle("is-active", el.id === id);
    });
    window.scrollTo(0, 0);
  }

  // ---------- 시작 화면 ----------

  const roundSelect = document.getElementById("roundSelect");
  const poolInfo = document.getElementById("poolInfo");
  const startBtn = document.getElementById("startBtn");

  function initStartScreen() {
    document.getElementById("siteTitle").textContent = CONFIG.siteTitle;
    document.getElementById("siteSubtitle").textContent = CONFIG.siteSubtitle;
    document.title = CONFIG.siteTitle;

    state.poolFemaleTotal = byGender(CANDIDATES, "female").length;
    state.poolMaleTotal = byGender(CANDIDATES, "male").length;
    const maxAvailable = Math.min(state.poolFemaleTotal, state.poolMaleTotal) * 2;

    roundSelect.innerHTML = "";
    CONFIG.roundOptions.forEach((n) => {
      const opt = document.createElement("option");
      opt.value = String(n);
      opt.textContent = `${n}강`;
      if (n > maxAvailable) {
        opt.disabled = true;
        opt.textContent += " (데이터 부족)";
      }
      roundSelect.appendChild(opt);
    });

    const defaultAvailable = CONFIG.roundOptions.includes(CONFIG.defaultRound) && CONFIG.defaultRound <= maxAvailable;
    roundSelect.value = String(defaultAvailable ? CONFIG.defaultRound : CONFIG.roundOptions.find((n) => n <= maxAvailable) || CONFIG.roundOptions[0]);

    updatePoolInfo();
  }

  function updatePoolInfo() {
    const fTeams = teamCount(byGender(CANDIDATES, "female"));
    const mTeams = teamCount(byGender(CANDIDATES, "male"));
    poolInfo.textContent =
      `여돌 ${fTeams}팀·남돌 ${mTeams}팀, 총 ${fTeams + mTeams}팀의 안무 영상이 랜덤으로 등장해 대결합니다. ` +
      `여돌 ${state.poolFemaleTotal}곡·남돌 ${state.poolMaleTotal}곡, 총 ${CANDIDATES.length}곡이 출전합니다.`;
  }

  roundSelect.addEventListener("change", updatePoolInfo);

  startBtn.addEventListener("click", () => {
    const n = Number(roundSelect.value);
    const half = n / 2;

    if (half > state.poolFemaleTotal || half > state.poolMaleTotal) {
      alert("data.js에 등록된 후보 수가 부족해서 이 강수로 시작할 수 없습니다.");
      return;
    }

    const femalePicks = shuffle(byGender(CANDIDATES, "female")).slice(0, half);
    const malePicks = shuffle(byGender(CANDIDATES, "male")).slice(0, half);

    startRound(femalePicks.concat(malePicks));
  });

  // ---------- 대결 화면 ----------

  const roundLabelEl = document.getElementById("roundLabel");
  const matchProgressEl = document.getElementById("matchProgress");

  const frameLeft = document.getElementById("frameLeft");
  const frameRight = document.getElementById("frameRight");
  const nameLeft = document.getElementById("nameLeft");
  const nameRight = document.getElementById("nameRight");
  const songLeft = document.getElementById("songLeft");
  const songRight = document.getElementById("songRight");
  const groupLeft = document.getElementById("groupLeft");
  const groupRight = document.getElementById("groupRight");

  function startRound(participants) {
    state.roundParticipants = participants;
    const { matches, byes } = buildMatches(participants);
    state.matches = matches;
    state.matchIndex = 0;
    state.winners = byes.slice();

    if (state.matches.length === 0) {
      finishRound();
      return;
    }

    showScreen("screen-battle");
    renderMatch();
  }

  function renderMatch() {
    const total = state.matches.length;
    const match = state.matches[state.matchIndex];

    roundLabelEl.textContent = roundLabelOf(state.roundParticipants.length);
    matchProgressEl.textContent = `${state.matchIndex + 1}/${total}`;

    frameLeft.src = ytEmbedUrl(match.left);
    nameLeft.textContent = match.left.name;
    songLeft.textContent = match.left.song || "";
    groupLeft.textContent = match.left.group || "";

    frameRight.src = ytEmbedUrl(match.right);
    nameRight.textContent = match.right.name;
    songRight.textContent = match.right.song || "";
    groupRight.textContent = match.right.group || "";
  }

  function stopVideos() {
    frameLeft.src = "";
    frameRight.src = "";
  }

  function pick(side) {
    const match = state.matches[state.matchIndex];
    const winner = side === "left" ? match.left : match.right;
    state.winners.push(winner);
    state.matchIndex++;

    stopVideos();

    if (state.matchIndex < state.matches.length) {
      renderMatch();
    } else {
      finishRound();
    }
  }

  document.getElementById("pickLeft").addEventListener("click", () => pick("left"));
  document.getElementById("pickRight").addEventListener("click", () => pick("right"));

  document.getElementById("backToStartBtn").addEventListener("click", () => {
    if (confirm("진행 중인 대결이 사라집니다. 처음으로 돌아갈까요?")) {
      stopVideos();
      showScreen("screen-start");
    }
  });

  function finishRound() {
    if (state.winners.length <= 1) {
      showResult(state.winners[0]);
    } else {
      startRound(state.winners);
    }
  }

  // ---------- 결과 화면 ----------

  const frameResult = document.getElementById("frameResult");
  const resultName = document.getElementById("resultName");
  const resultSong = document.getElementById("resultSong");
  const resultGroup = document.getElementById("resultGroup");

  function showResult(winner) {
    showScreen("screen-result");
    frameResult.src = ytEmbedUrl(winner);
    resultName.textContent = winner.name;
    resultSong.textContent = winner.song || "";
    resultGroup.textContent = winner.group || "";
  }

  document.getElementById("restartBtn").addEventListener("click", () => {
    frameResult.src = "";
    initStartScreen();
    showScreen("screen-start");
  });

  // ---------- 시작 ----------

  initStartScreen();
})();
