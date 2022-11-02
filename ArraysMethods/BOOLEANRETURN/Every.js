
//1
const numbers=[1,2,3,4,5,6]
// const result=numbers.every((item)=>item % 2 === 0) // false

const result=numbers.every((item)=> item > 0)

// console.log(result)


//2

const arr=[
    {
        name:"raj"
    },
    {
        name:"nag"
    },
    {
        name:"ram"
    },
    {
        name:"sekhar"
    },
]

const result1=arr.every((x)=>x.name !== undefined)
console.log(result1)


//3

const arr2 = [
    [1,2,3],
    [4,5,6],
    [9,7,8],
   // "serew"
]

const check=arr2.every(item=>Array.isArray(item))
console.log(check)