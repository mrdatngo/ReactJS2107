// Object
let car = {
    name: "Fiat",
    model: 500,
    weight: 850,
    color: "white",
    start: function() {
        console.log(this.name, " start running")
    }
}

// console.log(car)
// console.log("car.name", car.name)
// console.log("car[name]: ", car["name"])
// car.age = 5
// console.log("car.age:", car.age)
// console.log("car", car)
// car.start()
// car.stop = function() {
//     console.log(this.name, "'s stopping...")
// }
// car.stop()

// for(let prop in car) {
//     if (typeof(car[prop]) != "function") {
//         console.log("prop: ", prop, car[prop])
//     } else {
//         console.log("method: ", prop)
//     }
//     // typeof(car[prop]) != "function" ? (
//     //     console.log("prop: ", prop, car[prop])
//     // ) : (
//     //     console.log("method: ", prop)
//     // )
// }

// function checkNumber(number) {
//     let result = number % 2 == 0 ? "Even" : ( number > 5 ? ("Odd > 5") : ("Odd < 5") )
//     return result
// }

// console.log(checkNumber(3))
// window.name = "Window"

// let drive = function() {
//     console.log(this.name + " is driving....")
// }

// drive()

// car.drive = drive
// car.drive()

// let car2 = {
//     name: "Toyota"
// }
// car2.drive = drive.bind(car)
// car2.drive() 
// let driveCar2 = car2.drive
// driveCar2()

// let driverCar1 = car.drive.bind(car)
// driverCar1()

let car1 = {
    name: "Car1",
    run: function() {
        console.log(this.name + " is running...")
    }
}

car1.run()

// let car2 = {
//     name: "Car2"
// }

// car2.run = car1.run.bind(car1)
// car2.run()

function start(carRun) {
    // fuel....
    console.log("Fueling the car!")
    // ....
    carRun()
}

// setTimeout(() => {
//     console.log("car.....")
//     start(car1.run)
// }, 3000);

let carRun = car1.run.bind(car1)
carRun()
// start(carRun)
// start(car1.run)

// handle with data string object
let student = {
    name: "Dang Van Dat",
    age: 20,
    address: "HN",
    hand: {
        length: 20,
        width: 5
    }
}
// console.log(student, typeof(student))
// let dataStudentStr = JSON.stringify(student)
// console.log(dataStudentStr)
// let studentCp = JSON.parse(dataStudentStr)
// console.log(studentCp)

// the way to cp a object
let studentCp1 = JSON.parse(JSON.stringify(student))
studentCp1.name = "Thien"

// let student2 = student
// student2.name = "Luu The Minh"
// console.log(student2)
console.log(student) 
console.log(studentCp1) 

// Spread operator

let studentCp2 = {
    ...student,
    // name: student.name,
    // age: student.age,
    // address: student.address,
    // hand: {
    //     ...student.hand
    // }
}
studentCp2.name = "Change Name"

let studentCp3 = {}
Object.assign(studentCp3, student)
studentCp3.name = "Student 3"

// shadow copy
// studentCp3.hand.length = 5
// studentCp2.hand.length = 5

// deep copy
studentCp1.hand.length = 5

console.log(student, studentCp1, studentCp2, studentCp3)

// object destructering
// let age1 = student.age
// let nameAbc = student.name
// let addressxyz = student.address

let { age, name, address } = student
console.log(age, name, address)

















