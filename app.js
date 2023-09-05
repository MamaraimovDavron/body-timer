const timer = document.querySelector(".timer");
const timerHeader = document.querySelector(".timer-header");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const body = document.querySelector("body");
const wordsArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const degree = Math.floor(Math.random() * 360);
const randomPercentage = Math.floor(Math.random() * 100);

let second = 0;

const getGradient = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * wordsArray.length);
    color += wordsArray[randomNumber];
  }

  return color;
};

startBtn.addEventListener("click", () => {
  setInterval(myFunction, 1000);
});

stopBtn.addEventListener("click", clearInterval(setInterval(myFunction, 1000)));

function myFunction() {
  second++;
  timerHeader.innerHTML = second;

  const color1 = getGradient();
  const color2 = getGradient();

  if (second % 10 == 0) {
    timer.style.background = `linear-gradient(${degree}deg, ${color2}, ${color1})`;
  }

  body.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2})`;
}

// const setIntervalFunction = setInterval(myFunction, 1000);
// console.log(setIntervalFunction);

// startBtn.addEventListener("click", () => {
//   myFunction();
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(setIntervalFunction);
// });

// const stopFunction = () => {
//   console.log(clearInterval(setIntervalFunction));
// };

// startBtn.addEventListener("click", setIntervalFunction());
// stopBtn.addEventListener("click", stopFunction);
