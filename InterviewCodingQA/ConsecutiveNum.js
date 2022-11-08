// # FINDING MISSING SEQUENCE NUMBERS IN AN ARRAY //

let arr2 = [1, 5, 3, 9, 0, 7, 8];
let a=[1,2,3,4,5,6,7,8,11]


function findMissingNum(a){
  let newArr1 = [];
  a.sort((a,b)=>a-b)
for (let x=1; x<=a[a.length-1]; x++) {
  if (!a.includes(x)) {
    newArr1.push(x);
  }
}
return newArr1
}


console.log(findMissingNum(a)) // [ 9, 10 ]
console.log(findMissingNum(arr2)) // [ 2, 4, 6 ]
