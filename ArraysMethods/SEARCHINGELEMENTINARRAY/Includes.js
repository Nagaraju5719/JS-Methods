// INCLUDES :
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.


// SYNTAX :
// includes(searchElement, fromIndex*)

// searchElement : The value to search for.
// fromIndex  : The position in this array at which to begin searching for searchElement. The first element to be searched is found
//              at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex. 
//              Default value is 0

// Return Value : A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated
//                by the index fromIndex, if specified).




// 1
const arr=["Name","Age","Qualification"]

console.log(arr.includes("Name"))
console.log(arr.includes("Log"))