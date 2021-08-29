let expressElem = document.querySelector(".js-text-expression")
let resultElem = document.querySelector(".js-text-result")
let btnActionElems = document.querySelectorAll(".js-btn-action")
let btnOperatorElems = document.querySelectorAll(".js-btn-result")

console.log(expressElem, resultElem, btnActionElems, btnOperatorElems)

let express = ""
let result = ""

function renderExpression() {
    expressElem.innerText = express
}

function renderResult() {
    resultElem.innerText = result
}

renderExpression()
renderResult()

btnActionElems.forEach(btnActionElem => {
    btnActionElem.addEventListener("click", (event) => {
        express += event.target.innerText
        renderExpression()
    })
})

btnOperatorElems.forEach(btnOperatorElem => {
    btnOperatorElem.addEventListener("click", (event) => {
        result = eval(express)
        renderResult()
    })
})

document.onkeydown = (event) => {
    express += event.key
    renderExpression()
    console.log(event)
}