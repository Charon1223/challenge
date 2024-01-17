

const thisYear = new Date(2024, 11, 31, 23, 59, 59, 999);
let today;

setInterval(() => {
  today = new Date();
  document.body.textContent = `현재 날짜와 시간: ${today}`;
  const timeDiff = thisYear - today;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
  const p = document.createElement("p");
  p.textContent = `올해의 남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`;
  document.body.append(p);
}, 1000);
