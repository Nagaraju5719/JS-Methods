

// 1
const numbers=[1,2,3,4,5,6,7]

//a --->Using Arrow function
numbers.forEach((ele,index,arr)=>console.log("Arrow fn: "+ele))

//b --->Using callback fn
numbers.forEach(eachEle)
function eachEle(ele,index,arr){
console.log("callback fn: "+index + "--->" + ele)
console.log(arr)
}

//c --->Sum of the elements
let sum=0
numbers.forEach((ele,index,arr)=>{
    sum += ele
})
console.log("sum of the elements : " + sum)

//d -->count elements
let letters=['a','d','c','b','a','s','c','d','f','r','s']

let count={}

letters.forEach((ele)=>{
    if(count[ele]){
        //count[ele]=count[ele]+1
       // count[ele] +=1
       count[ele]++
    }
    else(
        count[ele]=1
    )
})

console.log("------Count------")
console.log(count)