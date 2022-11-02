
//1
const numbers=[1,2,3,4,5,6]
// const result=numbers.every((item)=>item % 2 === 0) // false

const result=numbers.some((item)=> item > 3)

 console.log(result)


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
        surname:"sekhar"
    },
]

const result1=arr.some((x)=>x.name === undefined)
console.log(result1)


//3

const arr2 = [
    [1,2,3],
    [4,5,6],
    [9,7,8],
    "serew"
]

const check=arr2.every(item=>Array.isArray(item))
console.log(check)