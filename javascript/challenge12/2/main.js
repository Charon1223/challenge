
const thEl = document.querySelectorAll("th");
const tdEl = document.querySelectorAll("td");


thEl.forEach((number, index) => {
  number.innerHTML = `${index + 2}단`;
});


tdEl.forEach((number, index) => {
  number.innerHTML = getMultiplicationTable(index + 2);
});


function getMultiplicationTable(num){
  
  let result = [];
  
  for(let i = 2; i <= 2; i++){
    for(let j = 1; j <= 9; j++){
      result.push(`${num} x ${j} = ${num * j}<br>`);
    }
  }
  return result.join(' ')
}
