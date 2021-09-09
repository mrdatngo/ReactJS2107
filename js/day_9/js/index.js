// JAVASCRIPT ADVANCE
// var let const
// var hoisting
// re-declare
var a = 3;
var a = 4
console.log(a)

// hoisting - declare of var being structure by moving to top
// console.log(hoisting)

// {
//     hoisting = "hoisting"
// }

// function x() {
//     var hosting = "hoisting"
// }
// console.log(hoisting)

// 'let' solved problem
// solve re-declare
// let a = 3;
// let a = 4;

// let solved hoisting
// console.log(hoitsing2)
// let hoisting2 = 3;

// {
//     let local = 5;
// }
// console.log(local)

// assign value at declare for const
const PI = 3.14
console.log(PI);

// ARGUMENTS
function sum() {
    // coding here
    let params = Array.from(arguments)
    console.log(params)
    return params.reduce((sum, next) => sum + next)
}

console.log(sum(1, 2, 3, 4, 5, 6))

// call, apply
function say(saySomething) {
    console.log(this.name + " " +saySomething);
}

let person = {
    name: "Thanh"
}

say.call(person, "say hello")
say.apply(person, ["say hello"])

// closure
// no one can not change ID from outside function
function generateId() {
    let ID = 0
    return function() {
        return ++ID
    }
}

let genId = generateId()

console.log(genId(), genId())
// ID = 1
console.log(genId(), genId())

// import - export
import { sayHello } from "./functions.js"

//import defaultExport from "./functions.js"
// let { sayHello } = defaultExport

sayHello()

// import say2, { sayHello as sayHelloFnc } from './functions.js'

// say2()
// sayHelloFnc()