// # RETURN ARR CONTAINING POSITIVE NUM FROM AN ARRAY //

const arr = [1, 2, 3, 0, "a", "b"];
const arr1 = [1, -2, 3, 0, "a", "b", -20, "45"];
// 1.
function positiveNumArr(arr) {
  return arr.filter((x) => typeof x === "number" && x >= 0);
}

//console.log(positiveNumArr(arr)); // [ 1, 2, 3, 0]

//2.
function callback(x) {
  if (typeof x === "number" && x >= 0) {
    return true;
  } else {
    return false;
  }
}

function positiveArr2(arr) {
  return arr.filter(callback);
}
// console.log(positiveArr2(arr));  // [ 1, 2, 3, 0]
// console.log(positiveArr2(arr1)); // [ 1, 3, 0]

// NOTE :
//  1. Call back fn in filter method will return boolean ether true or false

// 3.
function fikterNums(arr) {
  let newArr = [];
  for (let x of arr) {
    if (x >= 0 && typeof x === "number") {
      newArr.push(x);
    }
  }
  return newArr;
}
const result = fikterNums(arr);

console.log(result);
