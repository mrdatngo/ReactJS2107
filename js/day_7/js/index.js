// ex 15
// let studentName = prompt("Enter student name: ", "       LE van             Hung     ")
let studentName = "       LE van             Hung     "
studentName = studentName.trim()
// replace all two continous space
// while(studentName.includes("  ")) {
//     studentName = studentName.replaceAll("  ", " ")
// }
// replace all two continous space
studentName = studentName.replace(/\s+/g, ' ')
studentName = studentName.toLowerCase().split(" ").map(partName => partName ? partName[0].toUpperCase() + partName.slice(1) : partName).join(" ")

console.log(studentName.toLowerCase().split(" "))
console.log(studentName)


// ex16
let url = "https://www.facebook.com/ngothucdat?name=asdf&q=asdf/sdfsdfsdfjkhkj"

let id = url.slice(url.lastIndexOf("facebook.com/") + "facebook.com/".length, url.indexOf("?"))
console.log(id)

// ex19

function sumOf(n) {
    if (n == 0) return 0
    let total = sumOf(n - 1) + n
    console.log(n);
    return total
}

console.log(sumOf(10))

// ex23
console.log("-----------------------23-------------------------");
let startTime = new Date().getTime()
let numbers = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
let maxFeq = 0
let value

for(let i = 0; i < numbers.length; i++) {
    let count = 1
    for(let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            count++
        }
    }
    if (count > maxFeq) {
        maxFeq = count
        value = numbers[i]
    }
}

let endTime = new Date().getTime()

console.log(maxFeq, value, "Timer: ", (endTime - startTime))

// upgrade
let startTime2 = new Date().getTime()
let freqs = {}
numbers.forEach(n => {
    // if (freqs[n]) {
    //     freqs[n]++
    // } else {
    //     freqs[n] = 1
    // }
    freqs[n] = freqs[n] ? freqs[n] + 1 : 1
})
let maxFeq2 = 0
let value2
Object.keys(freqs).forEach(k => {
    let v = freqs[k]
    if (maxFeq2 < v) {
        maxFeq2 = v
        value2 = k
    }
})

let endTime2 = new Date().getTime()
console.log(maxFeq2, value2, "Timer", endTime2 - startTime2)

// show less - more

function limit(value, limit) {
    return value ? value.slice(0, limit) + "..." : ""
}

let isShowingMore = false
let desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora explicabo perferendis minus voluptatum aspernatur dolore adipisci? Exercitationem a, natus error, ipsam recusandae quaerat esse provident inventore reiciendis harum eum? Officiis."
let descElem = document.querySelector(".js-desc")
let btnShow = document.querySelector(".js-btn-show")

function render(isShowingMore) {
    if (isShowingMore) {
        btnShow.innerHTML = "Show less"
        descElem.innerHTML = desc
    } else {
        descElem.innerHTML = limit(desc, 50)
        btnShow.innerHTML = "Show more"
    }
}

render()

btnShow.addEventListener("click", () => {
    isShowingMore = !isShowingMore
    render(isShowingMore)
})
console.log()