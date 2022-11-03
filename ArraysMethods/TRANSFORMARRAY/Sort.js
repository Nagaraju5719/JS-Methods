// EXAMPLE 1 :

const stringArray = ['Blue', 'Humpback', 'Beluga'];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ['80', '9', '700'];
const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function sortArrayElementsUsingSortMethod(arr) {
  return arr.sort((a, b) => a - b)
}

const resultSortMethod1 = sortArrayElementsUsingSortMethod(stringArray)
const resultSortMethod2 = sortArrayElementsUsingSortMethod(numberArray)
const resultSortMethod3 = sortArrayElementsUsingSortMethod(numericStringArray)
const resultSortMethod4 = sortArrayElementsUsingSortMethod(mixedNumericArray)

console.log(resultSortMethod1)
console.log(resultSortMethod2)
console.log(resultSortMethod3)
console.log(resultSortMethod4)


// EXAMPLE 2 :
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
function sortArrayElements(arr) {
  return arr.sort((a, b) => a.value - b.value)
}

// sort by name
function sortElementsByName(arr) {
  return arr.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    return nameA === nameB ? 0 : nameA > nameB ? 1 : -1
  })
}

const itemsresult1 = sortArrayElements(items)
const itemsresultByName1 = sortElementsByName(items)

console.log(itemsresult1)
console.table(itemsresult1)

console.log(itemsresultByName1)
console.table(itemsresultByName1)


// # EXAMPLE 3 :
let users = [
  { 'name': 'Joe', 'address': 'Huston', 'dob': 'February 9, 1991', 'income': 87654 },
  { 'name': 'Bob', 'address': 'London', 'dob': 'July 1, 1986', 'income': 47974 },
  { 'name': 'Carl', 'address': 'Bangalore', 'dob': 'December 25, 1982', 'income': 97351 },
  { 'name': 'Amanda', 'address': 'Lagos', 'dob': 'March 19, 2001', 'income': 57753 },
];

function sortingUsersData(data) {
  // # sorting by name
  // data.sort((a,b)=>{
  //     const nameA = a.name.toUpperCase()
  //     const nameB = b.name.toUpperCase()
  //     return nameA === nameB ? 0 : nameA > nameB ? 1 : -1
  // })
  // return data

  // # sort by address
  // data.sort((a,b)=>{
  //     const addressA = a.address.toUpperCase()
  //     const addressB = b.address.toUpperCase()
  //     return addressA ===  addressB ? 0 : addressA > addressB ? 1 : -1
  // })
  // return data

  // # sort by income
  // return data.sort((a,b)=>a.income - b.income)

  // # sort by dob 
  return data.sort((a, b) => new Date(a.dob) - new Date(b.dob))
}

const usersResult = sortingUsersData(users)

console.log(usersResult)
console.table(usersResult)


// # EXAMPLE 4 :

const numbers = [1, 2, 4, 23, 5, 67, 54, 39, 78, 69]

numbers.sort((a, b) => a - b)  // ascending
numbers.sort((a, b) => b - a)  // descending
console.log(numbers)


// # EXAMPLE 5 :
const store = [
  {
    item: "Laptop",
    price: 60000,
    count: 10,
  },
  {
    item: "Mobiles",
    price: 10000,
    count: 5,
  },
  {
    item: "Desktop",
    price: 30000,
    count: 15,
  },
  {
    item: "Tables",
    price: 15000,
    count: 2,
  },
];

store.sort((a, b) => a.count - b.count)
console.log(store)



// # EXAMPLE 6 :
const names = ["Asha", "Raju", "Bathru", "Sandra"]
names.sort()
console.log(names)











////////////////////////////////////////////////////////////////////////////////////////////////////











// EXAMPLE 1 :
function smallTobig(numbers) {

  let A_B = []
      for(let i = 0; i < numbers.length; i++) {
       for(let j = i; j < numbers.length; j++) {
          if (numbers[i] > numbers[j]) {
              let temp = numbers[i];
              numbers[i] = numbers[j];
              numbers[j] = temp;
          }
      }
      A_B.push(numbers[i])
  }
  return A_B
  }
  console.log(smallTobig([5, 2, 1, 4])); 
  console.log(smallTobig([999, 5, 0, 1, 4, 998])); 
  console.log(smallTobig([15, 32, 11, 14]));
  console.log(smallTobig([5, 4, 3, 2, 1, 0]));
  console.log(smallTobig([123, 321, 143, 313]));