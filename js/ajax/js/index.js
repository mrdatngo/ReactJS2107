// function callApi(url, cb) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         // console.log(this.responseText)
//         cb(this.responseText)
//     }
//     xhttp.open("GET", url, true);
//     xhttp.send();
// }

// let handleDataCb = (text) => {
//     console.log(text);
// }

// let url = "https://api.covid19api.com/total/country/vietnam"
// callApi(url, handleDataCb)
// callApi("ajax_info.txt", handleDataCb)

// let data = callApi("https://api.covid19api.com/total/country/vietnam")
// console.log(data)

function callApi(url) {
    return new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            resolve(this.responseText)
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    })
}
let url = "https://api.covid19api.com/total/country/vietnam"


// handle with dom
let confirmedElem = document.querySelector(".js-confirmed")
let deathsElem = document.querySelector(".js-deaths")
let recoverElem = document.querySelector(".js-recover")
let activeElem = document.querySelector(".js-active")
let dateElem = document.querySelector(".js-date")

console.log(confirmedElem, deathsElem, recoverElem, activeElem)

callApi(url).then(dataText => {
    let data = JSON.parse(dataText)
    let lastDayData = data[data.length - 1]
    confirmedElem.innerText = lastDayData.Confirmed
    deathsElem.innerText = lastDayData.Deaths
    recoverElem.innerText = lastDayData.Recovered
    activeElem.innerText = lastDayData.Active
    dateElem.innerText = lastDayData.Date
})

// setInterval(() => {
//     confirmedElem.innerText = "Loading..."
//     deathsElem.innerText = "Loading..."
//     recoverElem.innerText = "Loading..."
//     activeElem.innerText = "Loading..."
//     dateElem.innerText = "Loading..."
//     callApi(url).then(dataText => {
//         let data = JSON.parse(dataText)
//         let lastDayData = data[data.length - 1]
//         confirmedElem.innerText = lastDayData.Confirmed
//         deathsElem.innerText = lastDayData.Deaths
//         recoverElem.innerText = lastDayData.Recovered
//         activeElem.innerText = lastDayData.Active
//         dateElem.innerText = lastDayData.Date
//     })
// }, 5000)


