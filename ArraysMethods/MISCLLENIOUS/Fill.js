

// 1

const numbers=[1,2,3,4,5,6,7,8]
const fillNum=numbers.fill(0)

const numbers2=[1,2,3,4,5,6,7,8]
const fillNum2=numbers2.fill(0,1,5)

// console.log(fillNum)
// console.log(fillNum2)


// 2

function fillThaArr(n){
    return Array(n).fill(0).map((x,index)=>index + 1)
}

const result=fillThaArr(25)

console.log(result)


console.log(Array(10).fill("X"))
