// ============================================================
// 3세대 아이돌 안무 월드컵 후보 데이터 (v1)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값
//   name      : 화면에 표시될 이름 (그룹명)
//   group     : 데뷔년도 (표시용)
//   song      : 곡 제목 (표시용)
//   gender    : "female"(여돌) 또는 "male"(남돌) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 여돌 11팀 32곡 · 남돌 14팀 32곡 = 총 64곡.
// 1순위: 공식 채널(그룹/소속사)의 Dance Practice·안무 영상
// 2순위: 그게 없으면 공식 채널의 댄스 퍼포먼스 영상 (항목 끝 주석에 표시)
// 각 영상은 유튜브 oEmbed(title/author_name)로 그룹·곡·공식 채널을 확인했습니다.
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 11팀 · 32곡 ----
  { id: "f01", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "CHEER UP", gender: "female", youtubeId: "7T4wxA2BGTo", start: 0 },
  { id: "f02", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "LIKEY", gender: "female", youtubeId: "aHN1dK2UxE4", start: 0 },
  { id: "f03", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "SIGNAL", gender: "female", youtubeId: "EpMwiqW8k8o", start: 0 },
  { id: "f04", name: "TWICE (트와이스)", group: "2015년 데뷔", song: "OOH-AHH하게 (Like OOH-AHH)", gender: "female", youtubeId: "cszZgUUwLjE", start: 0 },
  { id: "f05", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "붐바야 (BOOMBAYAH)", gender: "female", youtubeId: "ivoS3HUJB3Q", start: 0 },
  { id: "f06", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "휘파람 (WHISTLE)", gender: "female", youtubeId: "1kYrp_Bs8DU", start: 0 },
  { id: "f07", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "불장난 (PLAYING WITH FIRE)", gender: "female", youtubeId: "NvWfJTbrTBY", start: 0 },
  { id: "f08", name: "BLACKPINK (블랙핑크)", group: "2016년 데뷔", song: "마지막처럼 (AS IF IT'S YOUR LAST)", gender: "female", youtubeId: "hKUJmA9O6iA", start: 0 },
  { id: "f09", name: "Red Velvet (레드벨벳)", group: "2014년 데뷔", song: "Rookie", gender: "female", youtubeId: "o845InvtxKk", start: 0 },
  { id: "f10", name: "Red Velvet (레드벨벳)", group: "2014년 데뷔", song: "봐 (Look)", gender: "female", youtubeId: "bqFjyo7I8fY", start: 0 },
  { id: "f11", name: "Red Velvet (레드벨벳)", group: "2014년 데뷔", song: "음파음파 (Umpah Umpah)", gender: "female", youtubeId: "Z4BE86Z0kYE", start: 0 },
  { id: "f12", name: "MAMAMOO (마마무)", group: "2014년 데뷔", song: "HIP", gender: "female", youtubeId: "L7r_Zr06SxA", start: 0 }, // 사복 안무 영상 (떼창 ver.)
  { id: "f13", name: "MAMAMOO (마마무)", group: "2014년 데뷔", song: "너나 해 (Egotistic)", gender: "female", youtubeId: "6rKW0Gg0uNE", start: 0 },
  { id: "f14", name: "MAMAMOO (마마무)", group: "2014년 데뷔", song: "넌 is 뭔들 (You're the best)", gender: "female", youtubeId: "bjBst20P7A8", start: 0 },
  { id: "f15", name: "MAMAMOO (마마무)", group: "2014년 데뷔", song: "AYA", gender: "female", youtubeId: "3SNI_D-v8Ls", start: 0 },
  { id: "f16", name: "Lovelyz (러블리즈)", group: "2014년 데뷔", song: "Ah-Choo", gender: "female", youtubeId: "W20xJdBkLRM", start: 0 },
  { id: "f17", name: "Lovelyz (러블리즈)", group: "2014년 데뷔", song: "Candy Jelly Love", gender: "female", youtubeId: "kABkuIF7zWg", start: 0 },
  { id: "f18", name: "GFRIEND (여자친구)", group: "2015년 데뷔", song: "시간을 달려서 (Rough)", gender: "female", youtubeId: "cEbpyd-D4PI", start: 0 },
  { id: "f19", name: "GFRIEND (여자친구)", group: "2015년 데뷔", song: "오늘부터 우리는 (Me Gustas Tu)", gender: "female", youtubeId: "DMOaEdw4KJM", start: 0 },
  { id: "f20", name: "GFRIEND (여자친구)", group: "2015년 데뷔", song: "유리구슬 (Glass Bead)", gender: "female", youtubeId: "5Sd4FByvxQk", start: 0 },
  { id: "f21", name: "OH MY GIRL (오마이걸)", group: "2015년 데뷔", song: "불꽃놀이 (Remember Me)", gender: "female", youtubeId: "POHHjHNBVfM", start: 0 },
  { id: "f22", name: "OH MY GIRL (오마이걸)", group: "2015년 데뷔", song: "살짝 설렜어 (Nonstop)", gender: "female", youtubeId: "t5CwVVIp934", start: 0 },
  { id: "f23", name: "OH MY GIRL (오마이걸)", group: "2015년 데뷔", song: "BUNGEE (Fall in Love)", gender: "female", youtubeId: "zKMrEdqGH10", start: 0 },
  { id: "f24", name: "WJSN (우주소녀)", group: "2016년 데뷔", song: "부탁해 (Save Me, Save You)", gender: "female", youtubeId: "nHiPOD-h0RA", start: 0 },
  { id: "f25", name: "WJSN (우주소녀)", group: "2016년 데뷔", song: "모모모 (MoMoMo)", gender: "female", youtubeId: "27zLeOzp0Uk", start: 0 },
  { id: "f26", name: "MOMOLAND (모모랜드)", group: "2016년 데뷔", song: "뿜뿜 (BBoom BBoom)", gender: "female", youtubeId: "hLv5MBuSYDY", start: 0 },
  { id: "f27", name: "Dreamcatcher (드림캐쳐)", group: "2017년 데뷔", song: "Chase Me", gender: "female", youtubeId: "ik93LU-xpWc", start: 0 },
  { id: "f28", name: "Dreamcatcher (드림캐쳐)", group: "2017년 데뷔", song: "YOU AND I", gender: "female", youtubeId: "QA4mw_jL-E8", start: 0 },
  { id: "f29", name: "Dreamcatcher (드림캐쳐)", group: "2017년 데뷔", song: "Scream", gender: "female", youtubeId: "r16E2utaK3k", start: 0 },
  { id: "f30", name: "CLC (씨엘씨)", group: "2015년 데뷔", song: "BLACK DRESS", gender: "female", youtubeId: "OZAy2i1RpXQ", start: 0 },
  { id: "f31", name: "CLC (씨엘씨)", group: "2015년 데뷔", song: "HELICOPTER", gender: "female", youtubeId: "Fhsxigdw9gs", start: 0 },
  { id: "f32", name: "CLC (씨엘씨)", group: "2015년 데뷔", song: "ME(美)", gender: "female", youtubeId: "7J8-DUKfwoc", start: 0 },

  // ---- 남돌 (male) — 14팀 · 32곡 ----
  { id: "m01", name: "BTS (방탄소년단)", group: "2013년 데뷔", song: "쩔어 (DOPE)", gender: "male", youtubeId: "NnbIIXNPtPU", start: 0 },
  { id: "m02", name: "BTS (방탄소년단)", group: "2013년 데뷔", song: "FAKE LOVE", gender: "male", youtubeId: "nQySbNGu4g0", start: 0 },
  { id: "m03", name: "BTS (방탄소년단)", group: "2013년 데뷔", song: "I NEED U", gender: "male", youtubeId: "hvUZb9NT7EY", start: 0 },
  { id: "m04", name: "EXO (엑소)", group: "2012년 데뷔", song: "으르렁 (Growl)", gender: "male", youtubeId: "tiV4yyZF4mc", start: 0 },
  { id: "m05", name: "EXO (엑소)", group: "2012년 데뷔", song: "LOVE ME RIGHT", gender: "male", youtubeId: "GcHHIGpWqRM", start: 0 },
  { id: "m06", name: "EXO (엑소)", group: "2012년 데뷔", song: "전야 (The Eve)", gender: "male", youtubeId: "b6ycw7p9-bE", start: 0 },
  { id: "m07", name: "Wanna One (워너원)", group: "2017년 데뷔", song: "에너제틱 (Energetic)", gender: "male", youtubeId: "UeekjXMmv38", start: 0 },
  { id: "m08", name: "Wanna One (워너원)", group: "2017년 데뷔", song: "Beautiful", gender: "male", youtubeId: "DmdezafV6ko", start: 0 },
  { id: "m09", name: "Wanna One (워너원)", group: "2017년 데뷔", song: "활활 (Burn It Up)", gender: "male", youtubeId: "hqeEcAfHggI", start: 0 },
  { id: "m10", name: "SEVENTEEN (세븐틴)", group: "2015년 데뷔", song: "아주 NICE (VERY NICE)", gender: "male", youtubeId: "A1gJQpMSkEU", start: 0 },
  { id: "m11", name: "SEVENTEEN (세븐틴)", group: "2015년 데뷔", song: "HIT", gender: "male", youtubeId: "loPVNjGkrz4", start: 0 },
  { id: "m12", name: "SEVENTEEN (세븐틴)", group: "2015년 데뷔", song: "박수 (CLAP)", gender: "male", youtubeId: "K_qlkKYL-54", start: 0 },
  { id: "m13", name: "GOT7 (갓세븐)", group: "2014년 데뷔", song: "하드캐리 (Hard Carry)", gender: "male", youtubeId: "-XbNyh4GP-0", start: 0 },
  { id: "m14", name: "GOT7 (갓세븐)", group: "2014년 데뷔", song: "딱 좋아 (Just Right)", gender: "male", youtubeId: "nqmY53BICOM", start: 0 },
  { id: "m15", name: "BTOB (비투비)", group: "2012년 데뷔", song: "스릴러 (Thriller)", gender: "male", youtubeId: "eMbimVO9gEM", start: 0 },
  { id: "m16", name: "BTOB (비투비)", group: "2012년 데뷔", song: "MOVIE", gender: "male", youtubeId: "tF06vrP_gG4", start: 0 },
  { id: "m17", name: "WINNER (위너)", group: "2014년 데뷔", song: "REALLY REALLY", gender: "male", youtubeId: "R006vItSMKk", start: 0 },
  { id: "m18", name: "WINNER (위너)", group: "2014년 데뷔", song: "ISLAND", gender: "male", youtubeId: "B7jL-fTYDQs", start: 0 },
  { id: "m19", name: "iKON (아이콘)", group: "2015년 데뷔", song: "리듬 타 (RHYTHM TA)", gender: "male", youtubeId: "y4mgw8AcwL8", start: 0 },
  { id: "m20", name: "iKON (아이콘)", group: "2015년 데뷔", song: "죽겠다 (KILLING ME)", gender: "male", youtubeId: "W6_j0LqPIXk", start: 0 },
  { id: "m21", name: "NCT 127", group: "2016년 데뷔", song: "Cherry Bomb", gender: "male", youtubeId: "IMIcMrEuS-Q", start: 0 }, // SMTOWN 연습 영상 #CHERRY ver.
  { id: "m22", name: "NCT 127", group: "2016년 데뷔", song: "소방차 (Fire Truck)", gender: "male", youtubeId: "ssBGdX5-h94", start: 0 },
  { id: "m23", name: "NCT DREAM", group: "2016년 데뷔", song: "BOOM", gender: "male", youtubeId: "5kYEiCIbtRE", start: 0 }, // SM의 NCT DANCE 채널 업로드
  { id: "m24", name: "NCT DREAM", group: "2016년 데뷔", song: "We Go Up", gender: "male", youtubeId: "QLXvgzik5lU", start: 0 },
  { id: "m25", name: "MONSTA X (몬스타엑스)", group: "2015년 데뷔", song: "Shoot Out", gender: "male", youtubeId: "3oLG_rx1-lw", start: 0 },
  { id: "m26", name: "MONSTA X (몬스타엑스)", group: "2015년 데뷔", song: "HERO", gender: "male", youtubeId: "hb_yGZ9nJik", start: 0 },
  { id: "m27", name: "VIXX (빅스)", group: "2012년 데뷔", song: "다칠 준비가 돼 있어 (On and On)", gender: "male", youtubeId: "13yeFLqKTIA", start: 0 },
  { id: "m28", name: "VIXX (빅스)", group: "2012년 데뷔", song: "저주인형 (Voodoo Doll)", gender: "male", youtubeId: "E4NcBm4CUhU", start: 0 },
  { id: "m29", name: "NU'EST (뉴이스트)", group: "2012년 데뷔", song: "BET BET", gender: "male", youtubeId: "_0Q2HSZaamI", start: 0 },
  { id: "m30", name: "NU'EST (뉴이스트)", group: "2012년 데뷔", song: "LOVE ME", gender: "male", youtubeId: "ueAXzxJvgXo", start: 0 },
  { id: "m31", name: "PENTAGON (펜타곤)", group: "2016년 데뷔", song: "빛나리 (Shine)", gender: "male", youtubeId: "6_v8n_zb5ak", start: 0 },
  { id: "m32", name: "PENTAGON (펜타곤)", group: "2016년 데뷔", song: "청개구리 (Naughty Boy)", gender: "male", youtubeId: "RDRNg_NGFEY", start: 0 },
];
