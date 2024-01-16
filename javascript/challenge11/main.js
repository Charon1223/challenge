

const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userId = event.target.id.value;
  let userName = event.target.name.value;
  let userPhone = event.target.phone.value;
  let userPosition = event.target.position.value;

  document.write(
    `
    <p>${userId}님 환영합니다.</p>
    <p>회원가입 시 입력하신 내역은 다음과 같습니다.</p>
      <li>아이디 : ${userId}</li>  
      <li>이름 : ${userName}</li>  
      <li>전화번호 : ${userPhone}</li>  
      <li>원하는 직무 : ${userPosition}</li>  
    `
  )
});