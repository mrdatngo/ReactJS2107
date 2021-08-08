// var studentName = "Nguyen Quang Hieu"
// var studentAge = 20
// var studentAge = "20"
// // int studentAge = 20

// let studentMark
// studentMark = 10

// // let studentMark = 20
// const PI = 3.14

// let s = "Hoang Duy"
// // a is a mark
// let a = 10
// let A = 10

// console.log(studentName, typeof(studentName))
// console.log("studentName")
// // var PI = 3.1415

// console.log(studentAge, typeof(studentAge))

// console.log("studentMark: ", studentMark)
// console.log("PI: ", PI)

// {   
//     var height = 10;
//     let width = 20;
//     console.log(height, width)
// }

// // named
// // lower camel case
// let numberOfNguyenFirstName = 5;
// // number is standing for number of students have Nguyen in first name
// let number = 7;

// let firstNumber = 5;
// let secondNumber = 6;
// let total = firstNumber + secondNumber;


// // upper camel case
// let StudentMark = 50;

// DATA TYPE
// Number
let length = 20; //km
let vec = 5; // 5km/h
let time = length / vec;

// String
let studentName = "Nguyen Van A"
let studentMark1 = "10"

// studentName.concat(studentMark1)
let result = studentName - studentMark1
console.log("Des: ", result, typeof(result));

let studentMark2 = 3;

let totalMark = studentMark1 + studentMark2

console.log("totalMark: ", totalMark)

// bigInt
let largeNumber = 1923487927394732917923495873475943795749357943759743957894375947395492379479231479812389745698374n
let largeNumber2 = 1923487927394732917492379479231479812389745698334905784395789438789547389578349578934759874n
console.log(largeNumber + largeNumber2);

// boolean
// let gender = "male/famale/other"
let isMale = true
let isAgreePolicy = false

// object
let student = {
    name: "Nguyen Quang Hieu",
    mark: 10,
    age: 20
}
console.log("student.name:", student.name);

// function
function print() {
    console.log("Hello world function")
}
print()

// undefine
let abcd
console.log(abcd)
console.log("Continue");

// if - condition

let isRaining = false
let haveCar = true
studentName = "Nam"
// if (condition) {execution}
if (!isRaining && haveCar && studentName === "Nam") {
    console.log("Go to school");
} else {
    console.log("Stay at home");
}

let studentMark = -1;
/*
    student mark
    0: Very Bad
    (0, 5): Bad
    [5; 7): Quite good
    [7; 8): Good
    [8; 10]: Excellent
    Else: Invalid
*/

if (studentMark == 0) {
    console.log("Very bad");
} else if (studentMark > 0 && studentMark < 5) {
    console.log("Bad");
} else if (studentMark >= 5 && studentMark < 7) {
    console.log("Quite good");
}

// ....

else {

}

// switch case


// homework - what is different between == and ===