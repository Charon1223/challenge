


document.body.innerHTML = `<h1>4의 배수 5개씩 출력하기</h1>`;

let i = 100;
let count = 0;

while(i <= 500){
  if(i % 4 === 0){
    document.write(i + ' ');
    count++;

    if(count % 5 === 0){
      document.write('<br>');
    }
  }
  i++;
};

