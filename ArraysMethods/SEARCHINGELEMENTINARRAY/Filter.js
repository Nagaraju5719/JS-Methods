// FILTER :
// The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given 
// array which satisfy a condition set by the argument method. 

// SYNTAX :
// filter((element, index*, array*) => { /* … */ } )    // Arrow function
// filter(callbackFn, thisArg*)    // Callback function
// filter(function(element, index*, array*) { /* … */ }, thisArg*)  // Inline callback function


// callback    : This parameter holds the function to be called for each element of the array.
// element     : The parameter holds the value of the elements being processed currently.
// index       : This parameter is optional, it holds the index of the currentValue element in the array starting from 0.
// array       : This parameter is optional, it holds the complete array on which Array.every is called.
// thisValue   : This parameter is optional, it holds the context to be passed as this to be used while executing the 
//               callback function. If the context is passed, it will be used like this for each invocation of the callback function,
//               otherwise undefined is used as default.


// Return value: This method returns a new array consisting of only those elements that satisfied the condition of the arg_function. 
//                If no elements pass the test, an empty array will be returned.


// 1

const numbers=[1,2,3,4,5,6,7]

const even=numbers.filter((value)=>{
    return value % 2 === 0
})
console.log(even)
console.log(numbers)

// 2
const persons=[
    {
        name : "Flora",
        age:30
    },
    {
        name: "aarthi",
        age:28
    },
    {
        name : "Ahaini",
        age:23
    },
    {
        name: "Karthi",
        age:45
    },
]

const filtering=persons.filter(person=>person.age >= 30 )
console.log(filtering)


// 3
const numbers4=[1,2,3,1,4,2,5,3,6,7,5,4,8,9]

const unique=numbers4.filter((value,index,arr)=>arr.indexOf(value) === index)
console.log(unique)