function heavyCalculate() {
    console.log("Heavy calculate")
}

let month = 1;

// if (month >= 1 && month <= 3 && heavyCalculate()) {
//     console.log("Spring!")
// } else if (month >= 4 && month <= 6) {
//     console.log("Summer")
// } else if (month >= 7 && month <= 9) {
//     console.log("Autumn")
// } else if (month >= 10 && month <= 12) {
//     console.log("Winter")
// } else {
//     console.log("Month is wrong!")
// }

// switch case

// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Spring");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Summer");
//         break;
//     default:
//         console.log("Month is wrong!")
// }

// for, while, do whilte, break
let n = 100
let counter = 0
for (let index = 0; index < 1000; index++) {
    let number = 100
    // each step
    // console.log("Push up: ", index)
    // for(let j = 0; j < 1000; j++) {
    // //    console.log("    Run around: ", j)
    //    for(let k = 0; k < 1000; k++) {
    //     //    console.log("        Hit xa don!")
    //         counter++
    //    }
    // }
}
// console.log("Number: ", number)
console.log("Counter: ", counter);

// searching...
let x = 6
let numbers = [3, 4, 6, 2, 7, 9]
console.log("First number:", numbers[0])
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == x) {
        console.log("Found X: ", x)
        break;
    }
    console.log("Step: ", i)
}

// while
// for(;;) {} <=> infinity loop
let index = 0;
while (index < numbers.length) {
    // coding here
    if (numbers[index] == x) {
        console.log("Found X: ", x)
        break;
    }
    console.log("Step: ", index)
    index++;
}

// counter = 0;
// setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)
// }, 1000)

// let inputNumberStr = window.prompt("Enter a number: ", 0)
// let inputNumber = Number(inputNumberStr)
// while (Number.isNaN(inputNumber)) {
//     let inputNumberStr = window.prompt("Enter a number: ", 0)
//     inputNumber = Number(inputNumberStr)
// }
// console.log("inputNumber: ", inputNumber);

// => do while for input number from user
// do {
//     let inputNumberStr = window.prompt("Enter a number: ", 0)
//     inputNumber = Number(inputNumberStr)
// } while ((Number.isNaN(inputNumber)))
// console.log("inputNumber: ", inputNumber)

// // check Prime number

// if (inputNumber < 2) {
//     console.log(inputNumber, "is not prime")
// } else {
//     // handler rest
//     let check = false;
//     for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
//         if (inputNumber % i === 0) {
//             check = true
//             break;
//         }
//     }
//     if (check) {
//         console.log(inputNumber, "is not prime")
//     } else {
//         console.log(inputNumber, "is prime")
//     }
// }

// function
// function enterNumber(min, max) {
//     // let min = 5
//     do {
//         let inputNumberStr = window.prompt("Enter a number: ", 0)
//         inputNumber = Number(inputNumberStr)
//     } while ((Number.isNaN(inputNumber)) || inputNumber < min || inputNumber > max)
//     console.log("inputNumber: ", inputNumber)
//     return inputNumber
// }

// let number = enterNumber(10, 20) // call|invork
// console.log("number: ", number)

// note
let number = 5;
function changeNumber(number) {
    // console.log(number1);
    // number1 = 10;
    number = 10
    console.log("number: ", number)
}

changeNumber(number)
console.log("number: ", number)

let student = {
    mark: 5,
    body: {
        arm: {
            length: 10,
            width: 5
        },
        belly: 100,
    }
}

function changeStudentMark(student) {
    student.mark = 10
    console.log("mark: ", student.mark)
}
changeStudentMark(student)
console.log("mark: ", student.mark)