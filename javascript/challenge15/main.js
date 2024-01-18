

const h1El = document.querySelector("h1")
const startBtn = document.getElementById("start")
const resetBtn = document.getElementById("reset")
const numberDiv = document.querySelector(".numbers")

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
h1El.innerHTML = `${year}년 ${month}월 ${date}일 로또 번호 추첨🕹️`


let lottoNumbers = [];

function printNumbers(num){
  const eachNumDiv = document.createElement("div")
  eachNumDiv.classList.add("each")
  eachNumDiv.textContent = num
  numberDiv.append(eachNumDiv)
}

startBtn.addEventListener("click", () => {
  lottoNumbers = [];
  numberDiv.textContent = ''
  
  while(lottoNumbers.length < 6){

  const randomNumber = Math.floor(Math.random() * 45) + 1
  
    if(lottoNumbers.indexOf(randomNumber) === -1){
      lottoNumbers.push(randomNumber)
      printNumbers(randomNumber)

    }
  }
})


resetBtn.addEventListener("click", () => {
  lottoNumbers = [];
  numberDiv.textContent = ''
})