

// 1

const numbers=[1,2,3,4,5,6]

// const res = numbers.findIndex((item)=>item === 3)

const res=numbers.findIndex(callBack)
function callBack(item){
    return item === 4
}

console.log(res)


