

// EXAMPLE 1 :
const arr = ["Name", "Age", "Qualification"]

const joiner = arr.join(" ")

console.log(joiner)




//////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1 :
const arr1 = ["I", "am", "a", "Full stack", "developer!"]
const arr2 = [1, 2, 4, 5, 1, 6, 3, 5, 8, 3]

function joinStrings(arr) {
    let joinedStr = ""
    for (let x of arr) {
        if (typeof x === "number") {
            joinedStr += x
        } else {
            joinedStr += x + " "
        }
    }
    return joinedStr
}

const joinedString1 = joinStrings(arr1)
const joinedString2 = joinStrings(arr2)

console.log(joinedString1)
console.log(joinedString2)