// # FIND THE DIFFERENCE BETWEEN TWO ARRAYS //

let arr1 = [3,4] //[]//[2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 5, 3, 9, 0, 7, 8];

// 1.
let newArr = [...arr1, ...arr2];
let newArr1 = [];
for (let x of arr1) {
  if (!arr2.includes(x)) {
    newArr1.push(x);
  }
}
//console.log(newArr1);  //[ 2, 4, 6 ]

// 2.
let differce = arr1.filter((x) => !arr2.includes(x));
// let common = arr1.filter((x) => arr2.includes(x));
console.log(differce); // [ 2, 4, 6 ]
// console.log(common); // [ 3, 5, 7, 8 ]
