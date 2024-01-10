
const name = document.querySelector("h1");
const hobby = document.getElementById("hobby");
const age = document.getElementById("age");
const gender = document.getElementById("gender");

name.textContent = `제 이름은 ${prompt("당신의 이름은?")}이고`;
hobby.textContent = `제 취미는 ${prompt("당신의 취미는 무엇입니까?")} 입니다.`;
age.textContent = `나이는 올해 ${prompt("당신은 몇살입니까?")}살 입니다.`;
gender.textContent = `그리고 전 ${prompt("성별은 무엇인가요?")}입니다.`;