

// 1 addition
const numbers=[1,29,35,345,233,5,23,12,658,98]
//const addtionWithDelete=numbers.splice(3,4,76,43,79)

const addition=numbers.splice(3,0,56,23,21)  //return only deleted items



//console.log(addtionWithDelete)
// console.log("addition" + addition)
// console.log(numbers)


// 2 delete

const numbers2=[1,29,35,345,233,5,23,12,658,98]
const deleted=numbers2.splice(1,4)
console.log(deleted)
console.log(numbers2)