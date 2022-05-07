//declare the variables
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  // working for the second hand
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  // working for the minutes hand
  const minute = now.getMinutes();
  const minuteDegrees = (minute / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;
  console.log(minuteDegrees);

  //working with hours
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setInterval(digitalClock, 1000);
function digitalClock() {
  let now = new Date();

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  second = second < 10 ? "0" + second : second;
  let time = hour + ":" + minute + ":" + second;
  let currentTime = document.querySelector(".digital-clock");
  currentTime.innerHTML = time;
}
