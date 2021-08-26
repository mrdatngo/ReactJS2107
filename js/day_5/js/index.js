// declare
let fruitNames = ["orange", "banana", "kiwi", "mango", "grape"]
console.log(fruitNames, fruitNames.toString(), fruitNames.length, Array.isArray(fruitNames))
console.log("first value: ", fruitNames[0])
console.log("last value: ", fruitNames[fruitNames.length - 1])

for(let i = 0; i < fruitNames.length; i++) {
    console.log(fruitNames[i])
}

fruitNames.forEach((fruitName, index) => {
    console.log(fruitName, index)
})

// stack
let students = []
let studentA = {
    name: "A",
    age: 20
}

let studentB = {
    name: "B",
    age: 21
}
console.log(students)
students.push(studentA)
students.push(studentB)
students.push({
    name: "C",
    age: 22
})
// console.log(students)
// let studentC = students.pop()
// console.log(studentC)
console.log(students)

// queues
// shift
studentA = students.shift()
console.log(students)

// unsshift() - append at beginning
students.unshift(studentA)
console.log(students)

// splice - handle with middle array
students.push({
    name: "E",
    age: 25
})
console.log(students)
students.splice(3, 0, {name: "D", age: 25}, {name: "F", age: 25})
students.splice(4, 1)
students.splice(3, 1, {name: "D'", age: 25})
console.log(students)
console.log("reverse: ", students.reverse())
console.log("fruits.toString(): ", fruitNames.toString(), fruitNames.join(","), fruitNames.join(" "))

// let result = ""
// fruitNames.forEach((fruitName, index)=> {
//     let separate = ","
//     if (index == fruitNames.length - 1) {
//         separate = ""
//     }
//     result += fruitName + separate
// })
// console.log(result)

// copy, get a range from array
let fruitNames2 = fruitNames.slice(0)
console.log(fruitNames2)

let students2 = students.slice(2, 3)
students2[0].name = "TEST"
console.log(students)
console.log(students2)

console.log(fruitNames)
let kiwi = fruitNames.indexOf("kiwi", 3)
console.log(kiwi)

console.log(students)
let studentTestIndex = students.indexOf(studentA)
console.log(studentTestIndex)

console.log({} === {}) // compare by address

// find, filter, map, reduce, sort
// find
let findStudent =  students.find((student, index, originalArray) => {
    console.log(student, index, originalArray)
    return student.name === "B"
    // return student.age === 25
})

console.log(findStudent)

// let myArray = {
//     list: students,
//     find: function(callback) {
//         let foundStudent
//         for(let i = 0; i < this.list.length; i++) {
//             if (callback(this.list[i], i, this.list)) {
//                 foundStudent = this.list[i]
//                 break
//             } 
//         }
//         return foundStudent
//     }
// }

// console.log(myArray.find((student) => student.age === 25)) 

// filter
console.log(students)
let studentsAgeGreaterThan21 = students.filter((student, index, origin) => {
    console.log(student, index, origin)
    return student.age > 21
})
console.log(studentsAgeGreaterThan21)

// map
let persons = []
persons.push({
    firstName: "Nguyen",
    lastName: "Van A"
})

persons.push({
    firstName: "Le",
    lastName: "Van B"
})

// let personFullNames = []
// persons.forEach((person) => {
//     personFullNames.push({ fullName: person.firstName + " " + person.lastName })
// })

let personFullNames = persons.map(person => ({
    ...person, 
    fullName: person.firstName + " " + person.lastName
}))

console.log(persons)
console.log(personFullNames);

// reduce
let numbers = [3, 4, 5, 2, 2]
let total = numbers.reduce((previous, next) => next + previous)
console.log("total: ", total)

// concat
console.log("concat: ", personFullNames.concat(students))

// sort - cpu: 1000000 cal/second, quick-sort-(100000)O(nlog(n)) (selection sort: 0(n^2), 1000)
console.log(students)
console.log(students.sort((s1, s2) => {
    return s1.age - s2.age
}))

console.log(students)
console.log(numbers)
// numbers.sort().reverse()
numbers.sort((n1, n2) => {
    return n2 - n1
})
console.log(numbers)
// console.log(numbers.reverse())
let studentNames = ["Hieu", "Thanh", "duc", "Nga"]

// let studentSorted = studentNames.map(name => name.toLowerCase()).sort()
// console.log(studentSorted)

console.log(studentNames)
studentNames.sort((name1, name2) => {
    name1 = name1.toLowerCase()
    name2 = name2.toLowerCase()
    if (name1 > name2) {
        return 1 // need to sort
    } else if (name1 < name2) {
        return -1 // ok
    } else {
        return 0
    }
})
console.log(studentNames)

console.log(students)
// sort students by name

students.sort((s1, s2) => {
    let name1 = s1.name.toLowerCase()
    let name2 = s2.name.toLowerCase()
    if (name1 > name2) {
        return 1 // need to sort
    } else if (name1 < name2) {
        return -1 // ok
    } else {
        return 0
    }
})
