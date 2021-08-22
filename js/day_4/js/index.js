// get - dertermine element want to edit
let h3 = document.getElementById("js-first-title")
let containerElem = document.getElementById("js-container")

// let h3 = document.querySelector(".js-first-title")
// let h3 = document.querySelector("#js-first-title")
// let h3 = document.getElementsByClassName("js-first-title")[0]

// get all h3.js-first-title
let h3s = document.getElementsByClassName("js-first-title")
// let h3s = document.querySelectorAll("h3.js-first-title")

// updating - handle logic
let color = "red";

// updating - render
// - case => lower Camel case
// rare
h3.style.color = "red"
h3.style.borderTop = "1px solid green"

// occasionally
h3.classList.add("bg-dark")
// h3.className += " bg-dark"

// create, add
let pElem = document.createElement("p")
pElem.innerText = "Description"
containerElem.appendChild(pElem)

setTimeout(() => {
    containerElem.removeChild(pElem)
    h3.classList.remove("bg-dark")
}, 1000)

// event handler
let btnClick = document.querySelector(".js-btn-click")
btnClick.addEventListener("click", userClick)
// btnClick.onclick = userClick

function userClick() {
    alert("Click")
}

// clock
let clockElem = document.querySelector(".js-clock")
let timerElem = clockElem.querySelector(".js-clock-timer")

let timerInterval = setInterval(() => {
    // console.log("Do job");
    let newDateStr = new Date().toLocaleTimeString()
    timerElem.innerText = newDateStr
}, 1000)

// setTimeout(() => {
//     console.log("Do job");
//     timerElem.innerText = new Date().toLocaleTimeString()
// }, 1000)

setTimeout(() => {
    // stop clock
    clearInterval(timerInterval)
}, 10000)

console.log("Main thread")
// Homework exercise 1
// StopWatch
let timeRunnerElem = document.querySelector(".js-time-runner")
let btnStartTopElem = document.querySelector(".js-btn-start-stop")
let btnReset = document.querySelector(".js-btn-reset")
console.log(timeRunnerElem, btnStartTopElem, btnReset)
document
let miliSeconds = 0
let seconds = 0
let minutes = 0

let stopWatchInterval = 0

btnStartTopElem.addEventListener("click", () => {
    if (stopWatchInterval == 0) {
        stopWatchInterval = setInterval(() => {
            miliSeconds += 10
            if (miliSeconds === 100) {
                seconds += 1
                miliSeconds = 0
                if (seconds === 60) {
                    seconds = 0
                    minutes += 1
                }
            }
            updateTimeRunner(minutes, seconds, miliSeconds)
        }, 100)
        btnStartTopElem.innerText = "Stop"
    } else {
        clearInterval(stopWatchInterval)
        stopWatchInterval = 0
        btnStartTopElem.innerText = "Start"
    }
})

btnReset.addEventListener("click", () => {
    clearInterval(stopWatchInterval)
    miliSeconds = 0
    seconds = 0
    minutes = 0
    updateTimeRunner(minutes, seconds, miliSeconds)
})


function updateTimeRunner(minutes, seconds, miliSeconds) {
    timeRunnerElem.innerText = minutes + ":" + seconds + "," + miliSeconds
}

// EndStopWatch

// Number
let myNumber
console.log("myNumber: ", myNumber, typeof(myNumber));
console.log("isInteger: ", Number.isInteger(myNumber))
console.log("isInteger: ", Number.isInteger(Number.parseInt(myNumber)))
console.log("isNaN: ", Number.isNaN(myNumber))
console.log("isNaN: ", Number.isNaN(Number("csdf1234")))
console.log("isNaN: ", Number.isNaN("csdf1234"))
console.log("1/0", 1/0)
// console.log("Convert myNumber to String:", myNumber.toString())
console.log("Convert myNumber to String:", myNumber + "")

// random - homework 2
// note: Math.random() [0; 1)
function getRandom(max) { // [1; max]
    return Math.floor(Math.random() * max) + 1
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log("random: ", getRandom(10))
console.log("random (5, 35): ", getRandomNumber(5, 6))