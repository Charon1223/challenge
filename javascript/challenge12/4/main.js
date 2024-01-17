
const printTime = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime;
let isRunning = false;
let elapsedTime = 0;


let stopWatch = {
  startTime: 0,
  isRunning: false, 
  elapsedTime: 0,

  start(){
    this.startTime = new Date() - this.elapsedTime;
    this.isRunning = true;
    
    setInterval(() => {
      
      if(this.isRunning){
        const currentTime = new Date();
        this.elapsedTime = currentTime - this.startTime;
        displayElapsedTime(this.elapsedTime);
      }
    }, 90);
  },

  stop(){
    if(this.isRunning){
      this.isRunning = false;
    }
  },
}

startBtn.addEventListener("click", () => {
  stopWatch.start();
});

stopBtn.addEventListener("click", () => {
  stopWatch.stop();
});

resetBtn.addEventListener("click", () => {
  
  stopWatch.stop();

  stopWatch.startTime = 0;
  stopWatch.elapsedTime = 0;
  printTime.textContent = `경과 시간: 0:0:0`;
});

function displayElapsedTime(elapsedTime){
  let minutes = Math.floor(elapsedTime / (1000 * 60));
  let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  let milliSeconds = elapsedTime % 1000;
  
  printTime.textContent = `경과 시간: ${minutes}:${seconds}:${milliSeconds}`
};


