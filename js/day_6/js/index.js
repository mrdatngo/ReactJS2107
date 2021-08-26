
// strings
let name = '\'"""""Thanh""""\''
let name2 = "\"''''Duc'''''\""
let name3 = `\` ' "' ' '' ' '' '' ''Hoang
asdf
'
as;ldfj\
aslkdfj'
`

let studentName = "Thien"
let text = "Hi"
let description = `${studentName} say ${text}`

let desc = studentName + " say " + text

console.log(name, name2, name3)
console.log(description, desc);

// toUpperCase(), toLowerCase(), charAt(pos), indexOf(substr, pos), lastIndexOf(sub, pos)

let studentName2 = "HoAng"
console.log(studentName2.toLowerCase());
console.log(studentName2.toUpperCase());
console.log(studentName2.charAt(0))
console.log(studentName2[0])

studentName2[0] = 'T'
console.log(studentName2)
// normalize user name
// ...comeback later

try {
    let title = "This is a beautiful day!"
    console.log(title.indexOf("beautiful", 12))
    console.log(title.lastIndexOf("beautiful"))
    // slice(start, [end]), substring(start, [end]), substr(start, [,length]),
    let today = title.slice(0, 5)
    let is = title.substring(6, 8)
    let a = title.substr(9, 1)
    console.log(today)
    console.log(is)
    console.log(a)
    // replace(), concat() +, include()
    console.log(today.concat(is).concat(a), today + is + a)
    console.log(title.includes("day2"))
    // excersise
    // convert title to 'Today is a awesome day!'
    // let words = title.split(" ")
    // words.forEach((word, index) => {
    //     if (word === "beautiful") {
    //         words[index] = "awesome"
    //     }
    // })
    // words.join(" ")
    // console.log(title.split(" ").map(word => word === "beautiful" ? "awesome" : word).join(" "))

    function replace(str, oldStr, newStr) {
        let pos = str.indexOf(oldStr)
        return str.slice(0, pos) + newStr + str.slice(pos + oldStr.length)
    }
    console.log(replace(title, "beautiful", "awesome"))
    // replace()
    console.log(title.replace("beautiful", "awesome"))
    console.log(title.split(/(\d)/))
} catch (err) {
    console.log(err)
}

console.log("Main thread")

// OOP - Object Oriented Programming
// Class

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    go = () => {
        console.log(this.name + " is going!!!!!")
    }

    // go = function() {
    //     console.log(this.name + " is going")
    // }.bind(this)
}

class Student extends Person {
    constructor(name, age) {
        super(name, age)
    }

    study = () => {
        console.log(this.name + " is studying!");
    }

    go = () => {
        console.log(this.name + " don't go!")
    }
}

class Teacher extends Person {
    static ID = 100;

    constructor(name, age) {
        super(name, age)
    }

    teach = () => {
        console.log(this.name + " is teaching")
    }
}

let studentHoang = new Student("Hoang", 20)
let studentDuc = new Student("Duc", 21)
console.log(studentHoang, studentDuc)
studentHoang.study()
studentDuc.study()

studentDuc.go()

let studentDucGo = studentDuc.go
studentDucGo()

let studentDucStudy = studentDuc.study
studentDucStudy()

let aTeacher = new Teacher("John", 30)
console.log(aTeacher)

aTeacher.teach()

studentHoang.go()
aTeacher.go()

console.log(Teacher.ID)