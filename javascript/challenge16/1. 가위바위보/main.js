

const input = document.getElementById("input")
const resultButton = document.getElementById("result")

const computer = document.getElementById("com-img")
const computerImg = ["img/com1.png", "img/com2.png", "img/com3.png"]

const myTurn = document.getElementById("my-img")
const myImg = ["img/1.gif", "img/2.gif", "img/3.gif"]

const resultMessage = document.getElementById("result-text")



resultButton.addEventListener("click", () => {

  const computerValue = Math.floor(Math.random() * 3) + 1
  
  if(computerValue === 1){
    computer.src = computerImg[0]
  } else if(computerValue === 2){
    computer.src = computerImg[1]
  } else if(computerValue === 3){
    computer.src = computerImg[2]
  }


  const myInputValue = input.value

  if(myInputValue === "가위"){
    myTurn.style.display = "block"
    myTurn.src = myImg[0]
  } else if(myInputValue === "바위"){
    myTurn.style.display = "block"
    myTurn.src = myImg[1]
  } else if(myInputValue === "보"){
    myTurn.style.display = "block"
    myTurn.src = myImg[2]
  }

  if(
    (myInputValue === "가위" && computerValue === 2) ||
    (myInputValue === "바위" && computerValue === 3) ||
    (myInputValue === "보" && computerValue === 1)
  ) {
    resultMessage.innerHTML = " 졌습니다.😭"
  } else if(
    (myInputValue === "가위" && computerValue === 1) ||
    (myInputValue === "바위" && computerValue === 2) ||
    (myInputValue === "보" && computerValue === 3)
  ) {
    resultMessage.innerHTML = " 비겼습니다~"
  } else {
    resultMessage.innerHTML = " 이겼습니다!😄"
  }


  


  if(myInputValue !== "가위" && myInputValue !== "바위" && myInputValue !== "보"){
    alert(`"가위", "바위", "보" 중 하나를 입력하세요`)
    resultMessage.innerHTML = ''
    computer.src = "img/com.png"
  }
})