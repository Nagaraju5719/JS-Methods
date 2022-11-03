// FINDLASTINDEX :
// The findLastIndex() method iterates the array in reverse order and returns the index of the first element that 
// satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.


// SYNTAX :
// findLastIndex((element, index, array) => { /* … */ } )  // Arrow function
// findLastIndex(callbackFn, thisArg)  // Callback function
// findLastIndex(function(element, index, array) { /* … */ }, thisArg)  // Inline callback function

// callbackFn : A function used to test elements in the array.
// element : The current element being processed in the array.
// index : The index of the current element being processed in the array.
// array : The array findLastIndex() was called upon.

// Return Value : The index of the last (highest-index) element in the array that passes the test.
//                Otherwise -1 if no matching element is found.