
const images = document.querySelector(".images")
const stopButton = document.querySelector(".stop")


const animalImages = ['url("https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQOO0X7mMnoYz-e9Zdc6Pe6Wz7Ow1DcvhEiaex5aSv6QJDoCtcooqA7UUbjrphvjlIc")', 'url("https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202306/25/488f9638-800c-4bac-ad65-82877fbff79b.jpg")', 'url("https://image.theminda.com/data/tg/image/tour/middle/202303/e2cf73779b2b80db52432172a6035fda.jpg")', 'url("https://i.namu.wiki/i/9ZQ006q6J9MdhdjfM6DPpCbIsfaLezg5Fr9GyvtmRtEAItzwSV4DbpRlyG-ZMxgTVn4_5O-hg8DHpZSwYsRobA.webp")', 'url("https://i.namu.wiki/i/2ciOngq6rr_bm_6SUq4W0GZHzJZl8tuEEEMzeiPzOMjvETVrXFGxpeFL7cmXcd5c3kvftQBRH2nYFo8Xaoi9Ug.webp")']

let currentIndex = 0;

const itervalId = setInterval(() => {
  images.style.backgroundImage = animalImages[currentIndex]
  currentIndex = (currentIndex + 1) % animalImages.length
},1000)


stopButton.addEventListener("click", () => {
  clearInterval(itervalId)
})