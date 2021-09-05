// function hello() {
//     console.log("Hello")
// }

// function say(cb) {
//     cb()
// }

// say(hello)

// function cookingRice(cookingSoup, cookingFish) {
//     console.log("Start cooking rice")
//     setTimeout(() => {
//         console.log("cooking rice done!");
//         cookingSoup(cookingFish)
//     }, 2000)
// }

// function cookingSoup(cookingFish) {
//     console.log("Start cooking soup")
//     setTimeout(() => {
//         console.log("cooking soup done!");
//         cookingFish()
//     }, 1000)
// }

// function cookingFish() {
//     console.log("Start cooking fish")
//     setTimeout(() => {
//         console.log("cooking fish done!");
//     }, 2000)
// }

// function cooking(cookingRice, cookingSoup, cookingFish) {
//     cookingRice(cookingSoup, cookingFish)
// }

// cooking(cookingRice, cookingSoup, cookingFish)

// let cooking = {
//     cookingRice: function() {
//         console.log("cooking rice!");
//         return this
//     },
//     cookingFish: function() {
//         console.log("cooking fish");
//         return this
//     }
// }

// // console.log(cooking.cookingRice())
// cooking.cookingRice().cookingFish()
// cooking.cookingFish().cookingRice()

// get into university
let buyIPhoneSuccess = true
let findLoverSuccess = true

let buyIphoneCb = (resolve, reject) => {
    setTimeout(() => {
        if (buyIPhoneSuccess) {
            resolve({ success: true })
        } else {
            reject({ success: false })
        }
    }, 2000)
}

let findLoverCb = (resolve, reject) => {
    setTimeout(() => {
        if (findLoverSuccess) {
            resolve({ success: true })
        } else {
            reject({ success: false })
        }
    }, 3000)
}

let haveBabyCb = (resolve) => {
    setTimeout(() => {
        resolve({ success: true })
    }, 2000)
}


// new Promise(buyIphoneCb).then(data => console.log(data))
// new Promise(findLoverCb).then(data => console.log(data))
// new Promise(haveBabyCb).then(data => console.log(data))

// new Promise(buyIphoneCb)
//     .then((data) => {
//         console.log("BuyIphone: ", data)
//         return new Promise(findLoverCb)
//     })
//     .then((data) => {
//         console.log("findLover: ", data)
//         return new Promise(haveBabyCb)
//     })
//     .then((data) => {
//         console.log("Have baby: ", data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// console.log("Main thread")

// async/await
async function live() {
    try {
        let buyIphoneResult = await new Promise(buyIphoneCb)
        console.log(buyIphoneResult)

        let findLoverResult = await new Promise(findLoverCb)
        console.log(findLoverResult)

        let haveBabyResult = await new Promise(haveBabyCb)
        console.log(haveBabyResult)

    } catch (error) {
        console.log(error)
    }
}

// live()

// async/await in for
let promisesFunc = [buyIphoneCb, findLoverCb, haveBabyCb, findLoverCb]

// can't
// for(let i = 0; i <= promisesFunc.length; i++) {
// }
// can't
// promisesFunc.forEach(async cb => {
//     let result = await new Promise(cb)
//     console.log(result)
// })

async function doAllJob() {
    for(let cb of promisesFunc) {
        const result = await new Promise(cb)
        console.log(result);
    }
}

// doAllJob()

// not good
// promisesFunc.reduce(async (previous, next) => {
//     // console.log(previous, next)
//     if (previous == 0) {
//         return new Promise(next)
//     } else {
//         let result = await previous
//         console.log(result)
//     }
// }, 0)

// recursive

// async function doAllJobAsync(fns) {
//     if (!fns || fns.length == 0) {
//         return
//     }
//     let result = await new Promise(fns[0])
//     console.log(result)
//     doAllJobAsync(fns.slice(1))
// }

function doAllJobAsync(fns) {
    if (!fns || fns.length == 0) {
        return
    }
    new Promise(fns[0]).then(data => {
        console.log(data)
        doAllJobAsync(fns.slice(1))
    })
}

doAllJobAsync(promisesFunc)