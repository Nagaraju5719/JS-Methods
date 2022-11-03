// INDEXOF :
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.


// SYNTAX :
// indexOf(searchElement, fromIndex*)

// searchElement : Element to locate in the array.
// fromIndex : The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, 
//                 which means the array will not be searched. If the provided index value is a negative number, it is taken as 
//                 the offset from the end of the array. Note: if the provided index is negative, the array is still searched from 
//                 front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).

// Return Value : The first index of the element in the array; -1 if not found.

//1 

const names=["Jay","John","Ram","Sesu"]

console.log(names.indexOf("John"))
console.log(names.indexOf("Ram"))


const index=names.indexOf("Jay")
names[index]="Jaya"
console.log(names)