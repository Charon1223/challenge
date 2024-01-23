const table = document.querySelector("table");
const h2 = document.querySelector("h2");
h2.textContent = "75점이 넘는 사람: ";

const arr = [
  { name: "짱구", score: 45 },
  { name: "맹구", score: 75 },
  { name: "철수", score: 95 },
  { name: "훈이", score: 50 },
  { name: "유리", score: 68 },
  { name: "수지", score: 86 },
];

const sortedArr = [...arr]; 

sortedArr.sort((a, b) => b.score - a.score);

sortedArr.forEach((item) => {
  const trEl = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdScore = document.createElement("td");

  tdName.textContent = item.name;
  tdScore.textContent = item.score;

  table.appendChild(trEl);
  trEl.appendChild(tdName);
  trEl.appendChild(tdScore);
});

const jumpScore = sortedArr.filter((item) => item.score >= 75);

jumpScore.forEach((item, index) => {
  if (index > 0) {
    h2.textContent += ', ';
  }
  h2.textContent += item.name;
});

console.log(jumpScore);
