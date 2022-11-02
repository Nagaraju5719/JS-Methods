// # 1. How would you double elements of an array without creating additional variables using reduce ?
//      WITHOUT PRE-DEFINED METHODS :
//      METHOD 1 :  (for...of...)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arr1 = [-(1 / 4), 2, -3, 5 / 6, -7];

function doubleArrEleWOPM1(arr) {
  let doubleArr = [];
  for (let x of arr) {
    const eleDouble = x * 2;
    doubleArr.push(eleDouble);
  }
  return doubleArr;
}

// console.log(doubleArrEleWOPM1(arr)); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18,  0 ]
// console.log(doubleArrEleWOPM1(arr1)) // [ -0.5, 4, -6, 1.6666666666666667, -14 ]

//      METHOD 2 : (for loop)
function doubleArrEleWOPM2(arr) {
  let newArr;
  for (let x = 0; x < arr.length; x++) {
    arr[x] = arr[x] * 2;
    newArr = arr;
  }
  return newArr;
}

// console.log(doubleArrEleWOPM2(arr));

//      WITH PRE_DEFINED METHODS :
//      METHOD 1 : (array.forEach)
function doubleArrEleWPM1(arr) {
  let arr2 = [];
  arr.forEach((element) => {
    arr2.push(element * 2);
  });
  return arr2;
}

// console.log(doubleArrEleWPM1(arr)); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18,  0 ]
// console.log(doubleArrEleWPM1(arr1)) // [ -0.5, 4, -6, 1.6666666666666667, -14 ]

// # 2. How to destructure array elements in an array ?
//      WITH PRE-DEFINED METHODS :
//      METHOD 1 :
const [a, a1, a2, a3, a4, a5, a6, a7] = arr;
// console.log(a);
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// console.log(a6);
// console.log(a7);

//      METHOD 2 :  (array.map)
function arrDestructure(arr) {
  //arr.map(ele=>console.log(ele))
}

arrDestructure(arr);

// # 3. How would you remove and return the last element from an array in JavaScript?
//      WITHOUT PRE-DEFINED METHODS :
//      METHOD 1 :
function lastEle1(arr) {
  for (let x of arr) {
    if (x === arr[arr.length - 1]) {
      return x;
    }
  }
}
//console.log(lastEle1(arr));

//      WITH PRE_DEFINED METHODS :
//      METHOD 1 :  (array.pop)
//console.log(arr.pop())

//      METHOD 2 :  (array.splice)
const removedEle = arr.splice(arr.length - 1, 1);
const lastNum = +removedEle.toString();
//console.log(lastNum)

//      METHOD 3 :  (array.splice)
const removedEle1 = arr.splice(arr.length - 2, arr.length - 1);
const lastNum1 = +removedEle.toString();
//console.log(lastNum1)

// # 4. How would you empty an array in JavaScript ?
//      METHOD 1 :
let p = [1, 2, 3, 4, 5, 6, 7];
// p.length=0
p = [];
//console.log(p)

// # 5. How would you remove duplicate elements from an array in JavaScript?
//      WITHOUT PRE-DEFINED METHODS :
//      METHOD 1 :
const x = [
  1, 2, 3, 4, 3, 8, 2243, 24, 13, 325, 123, 2243, 13, 8, 12, 325, 4, 1, 123, 24,
  2243,
];

function removeDuplicate(x) {
  let uniqueEles = [];
  let duplicateEles = [];
  for (let k of x) {
    if (!uniqueEles.includes(k)) {
      uniqueEles.push(k);
    } else {
      duplicateEles.push(k);
    }
  }
  return { duplicateEles, uniqueEles };
}
//console.log(removeDuplicate(x));
const arrs = removeDuplicate(x);
const { duplicateEles, uniqueEles } = arrs;
// console.log(duplicateEles);
// console.log(uniqueEles);

//      WITH PRE_DEFINED METHODS :
//      METHOD 1 :
function filterMethod(x) {
  return x.filter((item, index) => x.indexOf(item) === index);
}

//console.log(filterMethod(x))

//      METHOD 2 :
function setMethod(x) {
  return [...new Set(x)];
}
//console.log(setMethod(x))

//      METHOD 3 :
function forEachMethod(x) {
  let newArr = [];
  x.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
}
//console.log(forEachMethod(x))

//      METHOD 4 :
function reduceMethod(x) {
  let unique = x.reduce(function (acc, ini) {
    if (!acc.includes(ini)) acc.push(ini);
    return acc;
  }, []);
  return unique;
}
//console.log(reduceMethod(x));

//      METHOD 5 :
function indexOfMethod(x) {
  let nonDuplicate = [];
  for (let i = 0; i < x.length; i++) {
    if (nonDuplicate.indexOf(x[i]) === -1) {
      nonDuplicate.push(x[i]);
    }
  }
  return nonDuplicate;
}
console.log(indexOfMethod(x));
