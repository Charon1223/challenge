

let score = prompt("기말고사 점수를 입력하세요.");

if(score >= 90){
  document.write(`나의 기말고사 점수는 ${score}점, 학점은 A!!!`);
} else if(score >= 80 && score <= 89){
  document.write(`나의 기말고사 점수는 ${score}점, 학점은 B!!!`);
} else if(score >= 70 && score <= 79){
  document.write(`나의 기말고사 점수는 ${score}점, 학점은 C!!!`);
} else if(score >= 60 && score <= 69){
  document.write(`나의 기말고사 점수는 ${score}점, 학점은 D!!!`);
} else {
  document.write(`나의 기말고사 점수는 ${score}점, 학점은 F!!!`);

}
