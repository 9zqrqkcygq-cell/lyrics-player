let playing = false;
let timer = null;

const lyricsData = [
  { time: 8.00,  text: "きらめいた朝陽がその横顔を照らしたから", color: "pink" },
  { time: 15.70, text: "空気が少し揺れた 少し揺れた", color: "purple" },
  { time: 22.00, text: "知らない声に笑顔で振り向いた君の隣で", color: "yellow" },
  { time: 29.00, text: "笑えない自分を知った 自分を知った", color: "purple" },
  { time: 36.80, text: "描いたままの未来とか", color: "green" },
  { time: 40.00, text: "途方もない360度の藍のカタチ", color: "blue" },
  { time: 47.50, text: "刻もう", color: "blue" },
  { time: 51.00, text: "青い。", color: "pink" },
  { time: 52.00, text: "空が解くeuphoria ループしてよいつまでも", color: "pink" },
  { time: 58.00, text: "ぐるり絡まったまま アンダースタンド？繋がってたい", color: "white" },
  { time: 65.00, text: "急かすチャイムが鳴り響いても僕らは探していたんだ", color: "yellow" },
  { time: 71.90, text: "ノートの端に書いた、数多 その続きは君と", color: "red" },

  { time: 92.00, text: "涙から芽生えたぬくもりがすべてを包み込んだ", color: "green" },
  { time: 99.00, text: "君が君でいる理由 僕が僕でいる痛みさえ", color: "purple" },
  { time: 105.80, text: "それさえも", color: "green" },
  { time: 107.00, text: "（幾度考えた）", color: "white" },
  { time: 110.50, text: "（傷もすきもやっぱ）", color: "red" },
  { time: 114.00, text: "（いつも光の中）", color: "white" },
  { time: 116.90, text: "思っていたよりも透明だから", color: "blue" },
  { time: 120.90, text: "（一瞬で過ぎ去った）", color: "red" },
  { time: 124.20, text: "（一分でいいから）", color: "white" },
  { time: 127.50, text: "(This is Love Will Last Forever)", color: "red" },

  { time: 137.00, text: "ひらり空にかざす手のひら リフレインはいつまでも", color: "pink" },
  { time: 143.50, text: "白い雲流れた彼方 目を凝らした", color: "yellow" },
  { time: 150.50, text: "君の顔が見えない程に 世界中が照らされて", color: "blue" },
  { time: 157.50, text: "全部嘘みたいで 全部ホントのこと", color: "white" },
  { time: 164.20, text: "Let Me Show", color: "white" },
  { time: 167.90, text: "青い。", color: "pink" },
  { time: 168.90, text: "空が解くeuphoria ループしてよいつまでも", color: "pink" },
  { time: 174.70, text: "ぐるり絡まったまま", color: "white" },
  { time: 177.80, text: "アンダースタンド？繋がってたい", color: "white" },
  { time: 181.80, text: "今度振り向いたら言えるかな？答えなんて今は無いさ", color: "yellow" },
  { time: 188.50, text: "いつか大人になる僕ら友達よりも…", color: "red" },
  { time: 195.50, text: "いつか大人になる 僕らあの空よりも青い", color: "red" }
];

const lyricsEl = document.getElementById("lyrics");
const slider = document.getElementById("slider");
const timeEl = document.getElementById("time");

lyricsData.forEach((line, i) => {
  const div = document.createElement("div");
  div.className = "line";
  div.style.color = line.color;
  div.textContent = line.text;
  lyricsEl.appendChild(div);
});

slider.addEventListener("input", () => {
  const currentTime = parseFloat(slider.value);
  timeEl.textContent = formatTime(currentTime);

  lyricsData.forEach((line, i) => {
    const el = lyricsEl.children[i];
    const nextTime = lyricsData[i + 1]?.time ?? Infinity;

    if (currentTime >= line.time && currentTime < nextTime) {
      el.classList.add("active");
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      el.classList.remove("active");
    }
  });
});
document.getElementById("playBtn").onclick = () => {
  if (playing) return;
  playing = true;

  timer = setInterval(() => {
    slider.value = (parseFloat(slider.value) + 0.05).toFixed(2);
    slider.dispatchEvent(new Event("input"));
  }, 50);
};

document.getElementById("pauseBtn").onclick = () => {
  playing = false;
  clearInterval(timer);
};
function formatTime(seconds) {
  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}
