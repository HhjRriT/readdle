new Swiper(".image-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slidesPerView: 4,
    spaceBetween: 10,
})

new Swiper(".image-slider2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slidesPerView: 2,
})

new Swiper(".image-slider3", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slidesPerView: 4,
    spaceBetween: 50,

})

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 90) {
        document.querySelector(".staticMenu").style.display = "none";
    } else {
        document.querySelector(".staticMenu").style.display = "block";
    }
    prevScrollpos = currentScrollPos;
}

const burgerBody = document.body.querySelector(".burgerBody")
burgerBody.style.display = "none"

const burger = document.body.querySelectorAll(".burger")
burger.forEach((i) => {
    i.addEventListener("click", () => {
        burgerBody.style.display = "flex";
    })
})

burgerBody.addEventListener(("click"), (event) => {
    if (event.target.className !== "burgerMenu") burgerBody.style.display = "none";
})

const popUp = document.body.querySelector(".popUp")
const contact = document.body.querySelector(".contact")
let contactInput = "";
const inPut = document.body.querySelector("input")

inPut.addEventListener("input", (event) => {
    contactInput = event.target.value
})

contact.addEventListener("click" , (event) => {
    event.preventDefault()
    if (checkEmail(contactInput)) window.open(`mailto:${contactInput}`)
    popUp.style.display = "flex"
    inPut.value = ""
})

function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

popUp.addEventListener("click", event => {
    if (event.target.className === "close" || event.target.className === "popUp") popUp.style.display = "none"
})


const text = [
    "We have a powerful iPhone calendar app on our hands here – meetings, locations, notes, tasks…everything under one roof.",
    "When it comes to combining both tasks lists and calendar events into one, the Plancy app currently does it best.",
    "Plancy gets close to being my ideal iPhone calendar app for the current state of calendar and reminders clients."
]
function getArrFromLstorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.error("arror at  arr in localstorage");
        return false;
    }
}

let  arrFromLStorage = getArrFromLstorage("arr");
if (arrFromLStorage === null) {
    localStorage.setItem("arr", JSON.stringify(text))
    arrFromLStorage = getArrFromLstorage("arr")
}


const about = document.body.querySelectorAll(".about")
for (let i = 0; i < about.length; i ++) {
    about[i].innerText = arrFromLStorage[i]
}