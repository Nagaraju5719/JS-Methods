
// 1

const numbers=[1,2,4,23,5,67,54,39,78,69]

numbers.sort((a,b)=>a-b)  // ascending
numbers.sort((a,b)=>b-a)  // descending
console.log(numbers)


// 2
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

  store.sort((a,b)=>a.count - b.count)
  console.log(store)



  // 3
  const names=["Asha","Raju","Bathru","Sandra"]
names.sort()
  console.log(names)