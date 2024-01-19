
const addIceCreamButton = document.querySelector(".add-icecream")
const iceCreamNameButton = document.querySelector(".icecream-name")
const printIceCreamListButton = document.querySelector(".print-icecream-list")
const inputIceCreamTextList = document.querySelector(".print-text")

let iceCreams = []

addIceCreamButton.addEventListener("click", () => {
  
  let getIceCream = prompt("추가하고 싶은 아이스크림의 이름을 입력해주세요")
  iceCreams.push(getIceCream)
})

iceCreamNameButton.addEventListener("click", () => {
  iceCreams.forEach((item) => {
    alert(item)
  })
})

printIceCreamListButton.addEventListener("click", () => {
  inputIceCreamTextList.innerHTML = iceCreams.join(", ")
})