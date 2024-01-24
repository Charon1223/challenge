const randomDogs = "https://dog.ceo/api/breeds/image/random/42";
const allbreeds = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const more = document.getElementById("more");
const toTheTop = document.getElementById("tothetop");
const reset = document.getElementById("reset");


const currentDogs = [];


function displayDogs(item){
  const dogImgDiv = document.createElement("div")
  dogImgDiv.classList.add("flex-item")
  dogImgDiv.innerHTML = `
    <img src=${item}>
  `
  main.appendChild(dogImgDiv)
}

window.addEventListener("load", () => {

  request1.open("get", randomDogs);
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response)
    response.message.forEach((item) => {
      currentDogs.push(item)
      displayDogs(item);
    })
  })
  request1.send()


  request2.open("get", allbreeds)
  request2.addEventListener("load", () => {
    const response = JSON.parse(request2.response)
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement("option")
      option.textContent = item
      option.value = item
      select.appendChild(option)
    })
  })
  request2.send()
})

button.addEventListener("click", () => { 
  main.innerHTML = ""
  let filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(input.value) !== -1
  })
  input.value = "";
  select.value = ""

  filteredDogs.forEach((item) => {
    displayDogs(item);
  })
})

select.addEventListener("change", () => {
  main.innerHTML = ""
  let filteredDogs = currentDogs.filter((item) => {
    return item.indexOf(select.value) !== -1
  })
  input.value = "";

  filteredDogs.forEach((item) => {
    displayDogs(item);
  })
})


more.addEventListener("click", () => {
  request1.open("get", randomDogs)
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response)

    response.message.forEach((item) => {
      const dogImgDiv = document.createElement("div")
      dogImgDiv.classList.add("flex-item")
      dogImgDiv.innerHTML = `
        <img src=${item}>
      `
    })
  })
  request1.send()
})

toTheTop.addEventListener("click", () => {
  window.scrollTo({top : 0})
})

reset.addEventListener("click", () => {
  main.innerHTML = ""
  
  request1.open("get", randomDogs)
  request1.addEventListener("load", () => {
    const response = JSON.parse(request1.response)
    
    response.message.forEach((item) => {
      const dogImgDiv = document.createElement("div")
      dogImgDiv.classList.add("flex-item")
      dogImgDiv.innerHTML = `
        <img src=${item}>
      `
    })
  })
  request1.send()
})