// CHECK FOR THE GIVEN STR IS PALINDROME OR NOT

// PALINDROME : Palindrome means if some thing has reversed it should be equal to original one.
// ex : str = "racecar"  reverstr="racecar"  str === reverstr

// METHOD 1 :
function Palindrome1(str) {
  // find reverse
  const reverse = str.split("").reverse().join("");
  //console.log(reverse)

  // check
  if (str === reverse) return true;
  return false;
}

// const result = Palindrome1("racecar")  // true
// const result = Palindrome1("avatar");  // false
//console.log(result);


// METHOD 2 :
// check for alpha numeric and remove special characters
function Palindrome2(str) {
  // replace special char with reg
  const reg = /[\w_]/g; // for non-alpha numeric
  const shortStr = str.replace(reg, ""); // replacing with none in special chars
  // find reverse  and check
  const reverse = shortStr.split("").reverse().join("");
  if (reverse === shortStr) return true;
  return false;
}

// const result = Palindrome2("_jhdfs#bhhsdf*jhgg"); // false
const result = Palindrome2("__m*a#la'y'al#a*m__");
console.log(result)
