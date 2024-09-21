const time = document.getElementById("time");
let timer = null;
let isRunning = false;
let starttime = 0;
let elapsedtime = 0;

function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(update, 10);
    starttime = Date.now() - elapsedtime;
  }
}

function pause() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function reset() {
  isRunning = false;
  clearInterval(timer);
  elapsedtime = 0;
  starttime = 0;
  time.textContent = "00:00:00:00";
}

function update() {
  elapsedtime = Date.now() - starttime;
  let h = Math.floor(elapsedtime / 3600000);
  let m = Math.floor((elapsedtime % 3600000) / 60000);
  let s = Math.floor((elapsedtime % 60000) / 1000);
  let ms = Math.floor((elapsedtime % 1000) / 10);
  time.textContent = `${h.toString().padStart(2, "0")}:${m
    .toString()
    .padStart(2, "0")}:${s.toString().padStart(2, "0")}:${ms
    .toString()
    .padStart(2, "0")}`;
}
