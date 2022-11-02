

// 1
let a=[1,2,3]
let a1=[4,5,6]
let b=a.concat()
let c=a.concat(a1)

let d=a.concat(56,76,a,a1)

console.log(b)  // [1,2,3]
console.log(c)  // [1,2,3,4,5,6]
console.log(d)

//console.log([1]+[2])