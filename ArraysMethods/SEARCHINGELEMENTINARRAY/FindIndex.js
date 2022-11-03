// FINDINDEX :
// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
// If no elements satisfy the testing function, -1 is returned.


// SYNTAX :

// findIndex((element, index*, array*) => { /* … */ } )  // Arrow function
// findIndex(callbackFn, thisArg*)  // Callback function
// findIndex(function(element, index*, array*) { /* … */ }, thisArg)   // Inline callback function

// function     : It is the function of the array that works on each element.
// element      : This parameter holds the current element.
// index        : It is an optional parameter that holds the index of the current element.
// array        : It is an optional parameter that holds the array object the current element belongs to.
// thisValue    : This parameter is optional, if a value to be passed to the function to be used as its “this” value else the 
//                value “undefined” will be passed as its “this” value.

// Return Value : It returns the array element index if any of the elements in the array pass the test, otherwise, it returns -1.

// 1

const numbers=[1,2,3,4,5,6]

// const res = numbers.findIndex((item)=>item === 3)

const res=numbers.findIndex(callBack)
function callBack(item){
    return item === 4
}

console.log(res)


