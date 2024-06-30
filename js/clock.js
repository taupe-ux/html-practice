const clock = document.querySelector("#clock");

function kakaoClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}
kakaoClock();
setInterval(kakaoClock, 1000);
