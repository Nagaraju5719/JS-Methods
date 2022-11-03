// 1
const numbers = [1, 2, 3];

// a ---> arrow fn
const numbers2 = numbers.map((value, index, arr) => value * 2);
console.log(numbers2);
console.log(numbers);

// b ---> callback with multiflication
const numbers3 = numbers.map(multifly);

function multifly(value, index, arr) {
  return value * index;
}

console.log(numbers3);



// 2

const items = [
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

const resultPrice = items.map((item) => item.price * item.count);
console.log(resultPrice);

const itemAndPrice = items.map((item) => ({
  itemName: item.item,
  itemPrice: item.price * item.count,
}));
console.log(itemAndPrice);
