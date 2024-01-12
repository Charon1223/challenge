

const input = document.getElementById("input");
const button = document.getElementById("button");
const reStartButton = document.getElementById("restart-btn");
const hint = document.getElementById("hint");


let randomNum = Math.floor(Math.random() * 100) + 1;


button.addEventListener("click", () => {
  let inputVal = input.value;

  if(inputVal == randomNum){
    alert("👏👏👏좀 잘찍네?! 정답!!");
    reStartButton.style.display = "block";
  } else if(inputVal < randomNum){
    hint.innerHTML = "힌트: 숫자가 너무 작아요! 조금 더 높여보세요!"
  } else if(inputVal > randomNum){
    hint.innerHTML = "힌트: 숫자가 커요! 줄여볼까요?!";
  } 

  if(isNaN(inputVal)){
    alert("숫자만 입력해주세요");
    return;
  }

  reStartButton.addEventListener("submit", () => {
  });
});