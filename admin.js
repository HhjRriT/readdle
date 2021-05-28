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

let arrFromLStorage = getArrFromLstorage("arr");
if (arrFromLStorage === null) {
    localStorage.setItem("arr", JSON.stringify(text))
    arrFromLStorage = getArrFromLstorage("arr")
}

const form = document.body.querySelector("form")
const log = document.body.querySelector(".log")
const pass = document.body.querySelector(".pass")
const logIn = document.body.querySelector(".logIn")

logIn.addEventListener("click", event => {
    event.preventDefault()
    if (log.value === "admin" && pass.value === "admin") {
        addAreasToEdit()
        console.log("ok")
    } else {
        alert("wrong log or password")
    }
})


const wrapper = document.body.querySelector(".wrapper")
function addAreasToEdit() {
    form.style.display = "none"
    const block = document.createElement("div")
    block.className = "block"
    for (let i of arrFromLStorage) {
        const textArea = document.createElement("textarea")
        textArea.value = i
        block.appendChild(textArea)
    }
    const btn = document.createElement("button")
    btn.innerText = "save"
    btn. addEventListener("click", () => {
       let newText =  wrapper.querySelectorAll("textarea")
        newText = [...newText]
        newText = newText.map(el => el.value)
        localStorage.setItem("arr", JSON.stringify(newText))
    })
    block.appendChild(btn)
    wrapper.appendChild(block)

}

