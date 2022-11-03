// FIND :
// The find() method returns the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.


// SYNTAX :
// find((element, index*, array*) => { /* … */ } )
// find(callbackFn, thisArg*)
// find(function(element, index*, array*) { /* … */ }, thisArg)

// callbackFn  : It is the function of the array that works on each element.
// element     : This parameter holds the current element.
// index       : It is an optional parameter that holds the index of the current element.
// array       : It is an optional parameter that holds the array object the current element belongs to.
// thisValue   : This parameter is optional. If a value is to be passed to the function to be used as its “this” value 
//               else the value “undefined” will be passed as its “this” value.


// Return value: It returns the array element value if any of the elements in the array satisfy the condition, 
//               otherwise it returns undefined.


// 1 
const names=["raj","Ram","deepti","Aarthi","Nag"]

const res=names.find(findRam)

function findRam(item){
    return item === "Ram"
}

console.log(res)


// 2
const nameArr=[
    {
        name:"Raj",
        age:30
    },
    {
        name:"Shesu",
        age:20
    },
    {
        name:"Alpha",
        age:34
    },
    {
        name:"Kokila",
        age:54
    },
]

const res2=nameArr.find(findAlpha)

function findAlpha(item){
    return item.name == "Alpha"
}

console.log(res2.age)