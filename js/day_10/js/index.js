// generator

let numbers = [1, 2, 3, 5, 2, 7]

function makeIterator(array) {
    let nextIndex = 0
    return {
        next: function () {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true }
        }
    }
}

let iterator = makeIterator(numbers)

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// error - self-fix
// while (!iterator.next().done) {
//     console.log(iterator.next().value);
// }

for (let index in numbers) {
    console.log(index);
}

for (let value of numbers) {
    console.log(value);
}

let myArray = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 10,
    // list: [5, 2, 3, 6, 8, 9],
    [Symbol.iterator]: function* () {
        let nextIndex = 0
        let list = Object.keys(this)
        // console.log(list);
        // return {
        //     next: () => {
        //         // return nextIndex < this.list.length ? { value: this.list[nextIndex++], done: false } : { done: true }
        //         return nextIndex < list.length ? { value: this[nextIndex++], done: false } : { done: true }
        //     }
        // }
        while(nextIndex < list.length) {
            yield this[nextIndex++]
        }
    }
}


for (let value of myArray) {
    console.log(value);
}


// yield
function* idMaker() {
    let index = 0
    yield index++
    yield index++
    yield index++
}

var genId = idMaker()
while (true) {
    let next = genId.next()
    if (next.done) {
        break
    }
    console.log(next.value);
}