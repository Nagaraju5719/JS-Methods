

// 1

const numbers=[1,2,3,4,5,6,7]

const max=numbers.reduce(callback,0)

function callback(accumalator,value){
    // console.log("accumalator" +accumalator)
    // console.log(value)
    return accumalator + value
}

console.log(max)


// 2

const numbers1=[1,3,4,23,57,44,4534]

const grater=numbers1.reduce(callback1,-Infinity)
function callback1(acc,val){
    if(acc > val){
        return acc
    }
    else{
        return val
    }
}

console.log(grater)


// 3

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

  const totalPrice=store.reduce((acc,val)=>acc + val.count * val.price,0)
  console.log(totalPrice)