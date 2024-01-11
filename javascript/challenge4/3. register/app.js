
const email = document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementById("password");
const phone1 = document.getElementById("phone1");
const phone2 = document.getElementById("phone2");
const phone3 = document.getElementById("phone3");
const checkNum = document.getElementById("check-number");
const locationEl = document.getElementById("location");
const joinButton = document.getElementById("join");


joinButton.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(`이메일 주소 : ${email.value}`);
  console.log(`이름 : ${name.value}`);
  console.log(`비밀번호 : ${password.value}`);
  console.log(`휴대폰 번호 맨 앞자리 : ${phone1.value}`);
  console.log(`두번째 자리 : ${phone2.value}`);
  console.log(`세번째 자리 : ${phone3.value}`);

  let selectVal = locationEl.value;

  console.log(`살고 있는 지역 : ${selectVal}`);
});


