
// 1

const num = [1, 2, 3, 4, 5, 6]

//const reverse=num.reverse()
// const reverse=[...num].reverse()
const reverse = num.concat().reverse()

console.log(reverse)

// EXAMPLE 2 : reversing the string word
const string1 = "Coding is fun!"  // fun! is Coding
const reverseStr1 = string.split(" ").reverse().join(" ")

console.log(reverseStr)


// EXAMPLE 3 : reversing each word in the string
const string2 = "Coding is fun!"                         // !nuf si gnidoC
const string3 = "Coding"                                 // gnidoC

function reverseString(str) {
    return string.split(" ").map((x, i) => x.split('').reverse().join("")).reverse().join(" ")
}

const reverseStr2 = reverseString(string2)
const reverseStr3 = reverseString(string3)

console.log(reverseStr2)
console.log(reverseStr3)









///////////////////////////////////////////////////////////////////////////////////////////////////








// EXAMPLE 1 :
let word = "Coding!"
let sen = "welcome to coding!"

function reverseString(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        newStr += str[str.length - 1 - i]
    }
    return newStr
}

const reversedWord = reverseString(word)
const reversedSen = reverseString(sen)

console.log(reversedString1)
console.log(reversedString2)


// EXAMPLE 2 : reversing each word in a string
let str1 = "Welcome to coding!"
let str2 = "Let's have fun"
let str3 = "Welcome to the word!!!"
let str4 = "JavaScript"

function reverseEachWord(x) {
    let reverseWord = ""
    for (let k = 0; k < x.length; k++) {
        reverseWord += x[x.length - 1 - k]
    }
    return reverseWord
}

function reverseString(str) {
    let reversedStr = ""
    let strArr = []
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        // newStr += str[str.length -1 -i]
        if (str[i] === " " || i === str.length - 1) {
            strArr.push(newStr)
            newStr = ""
        }
        else {
            newStr += str[i]
        }
    }
    for (let x of strArr) {
        reversedStr += reverseEachWord(x) + " "
    }
    return reversedStr
}

const reversedString1 = reverseString(str1 + " ")  // emocleW ot !gnidoc 
const reversedString2 = reverseString(str2 + " ")  // s'teL evah nuf 
const reversedString3 = reverseString(str3 + " ")  // emocleW ot eht !!!drow 
const reversedString4 = reverseString(str4 + " ")  // tpircSavaJ 

console.log(reversedString1)
console.log(reversedString2)
console.log(reversedString3)
console.log(reversedString4)