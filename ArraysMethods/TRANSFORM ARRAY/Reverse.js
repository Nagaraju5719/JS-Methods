
// 1

const num=[1,2,3,4,5,6]

//const reverse=num.reverse()
// const reverse=[...num].reverse()
const reverse=num.concat().reverse()

console.log(reverse)

// 2

const string="Coding is fun!"
//const reverseStr=string.split(" ") // converts into array

//const reverseStr=string.split("").reverse().join("")

const reverseStr=string.split(" ").reverse().join(" ")

console.log(reverseStr)