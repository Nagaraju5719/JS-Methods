//--------------------------- # 1. CONVERTING STR INTO ARRAY ------------------------------//
// WITHOUT PREDEFINED METHOD//
// METHOD : 1
// procedure :
// 1. Create function and pass the str.
// 2. Create an arr(a) with empty str i.e.,a = [""] inside function and create a variable(j)
//    with value 0 it will working as a index of the arr.
// 3. Loop over the sentence and give a condition that check for space (" ").
// 4. if the condition is true, increase the variable value by 1 i.e.,j++ and push nothing
// 5. if false add the char to arr(a) at partiucular index(j) and return that.
const string1 = "I am a working fullstack developer";
const string2 = "Java Script is single threaded language!";
const string3 = "useState used to update the state";
const string4 = "Java Script is a synchronous";
const string5 = "React!!!";

function strToArrWOPM(str) {
  let a = [""];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      j++;
      a.push("");
    } else {
      a[j] += str[i];
    }
  }

  return a;
}

// console.log("strArrWOPM",strToArrWOPM(string1)); // [ 'I', 'am', 'a', 'working', 'fullstack', 'developer' ]
// console.log("strArrWOPM",strToArrWOPM(string2)); // [ 'Java', 'Script', 'is', 'single', 'threaded', 'language!' ]
// console.log("strArrWOPM",strToArrWOPM(string3)); // [ 'useState', 'used', 'to', 'update', 'the', 'state' ]
// console.log("strArrWOPM",strToArrWOPM(string4)); // [ 'Java', 'Script', 'is', 'a', 'synchronous' ]
// console.log("strArrWOPM",strToArrWOPM(string5)); // [ 'React!!!' ]

//---------------------------------------------

// WITH PREDEFINED METHOD//
// METHOD : 1
// 1. str.split(separator) will convert string into array
// NOTE : if separator is none then it will take each char as ele with comma separation.
//        Otherwise it will separated by separator.
const stringPM = "I am a working fullstack developer";
const string1PM = "React";

const strArr1 = stringPM.split(" ");
const strArr2 = string1PM.split("");

// console.log("strArrWPM", strArr1);
// console.log("strArrWPM", strArr2);

// --------------------# CHANGING EVEN ODD POSITION OF CHAR IN STR----------------------//
//--------------------------------------------------------------------------------------//
const str1 = "I"; // "I"
const str2 = "am"; // "ma"
const str3 = "a"; // "a"
const str4 = "working"; // "owkrnig"
const str5 = "fullstack"; // "uflltscak"
const str6 = "developer"; // "edevolepr"

function modifiedStr(evenStr, oddStr, smallStr, greaterStr) {
  let mStr = "";

  let exStr = greaterStr.slice(smallStr.length);
  for (let i = 0; i < smallStr.length; i++) {
    mStr = mStr + oddStr[i] + evenStr[i];
  }
  mStr = mStr + exStr;
  return mStr;
}

function findEvenOddStr(str) {
  let evenStr = "";
  let oddStr = "";
  for (let x = 0; x < str.length; x++) {
    if (x % 2 === 0) {
      evenStr = evenStr + str[x];
    } else if (x % 2 === 1) {
      oddStr = oddStr + str[x];
    }
  }
  let smallStr = evenStr.length > oddStr.length ? oddStr : evenStr;
  let greaterStr = evenStr.length < oddStr.length ? oddStr : evenStr;
  return modifiedStr(evenStr, oddStr, smallStr, greaterStr);
}

// console.log(findEvenOddStr(str1));    // "I"
// console.log(findEvenOddStr(str2));    // "ma"
// console.log(findEvenOddStr(str3));    // "a"
// console.log(findEvenOddStr(str4));    // "owkrnig"
// console.log(findEvenOddStr(str5));    // "uflltscak"
// console.log(findEvenOddStr(str6));    // "edevolepr"

//------------------------ # 1. CHANGING EVEN ODD POSITION OF CHAR IN STR IN SENTENCE ------------------------------//
// WITHOUT PREDEFINED METHOD//
// METHOD : 1
const sen1 = "I am a working fullstack developer";
const sen2 = "Java Script is single threaded language!";
const sen3 = "useState used to update the state";
const sen4 = "Java Script is a synchronous";
const sen5 = "React!!!";

function modifiedStrInSen(evenStr, oddStr, smallStr, greaterStr) {
  let mStr = "";

  let exStr = greaterStr.slice(smallStr.length);
  for (let i = 0; i < smallStr.length; i++) {
    mStr = mStr + oddStr[i] + evenStr[i];
  }
  mStr = mStr + exStr + " ";
  return mStr;
}

function findEvenOddStrInSen(str) {
  let evenStr = "";
  let oddStr = "";
  for (let x = 0; x < str.length; x++) {
    if (x % 2 === 0) {
      evenStr = evenStr + str[x];
    } else if (x % 2 === 1) {
      oddStr = oddStr + str[x];
    }
  }
  let smallStr = evenStr.length > oddStr.length ? oddStr : evenStr;
  let greaterStr = evenStr.length < oddStr.length ? oddStr : evenStr;
  return modifiedStrInSen(evenStr, oddStr, smallStr, greaterStr);
}

function senToArrWOPM(str) {
  let a = [""];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      j++;
      a.push("");
    } else {
      a[j] += str[i];
    }
  }

  let finalStr = "";
  for (let each of a) {
    finalStr = finalStr + findEvenOddStrInSen(each) + " ";
  }
  return finalStr;
}

// console.log(senToArrWOPM(sen1)); // I  ma  a  owkrnig  uflltscak  edevolepr
// console.log(senToArrWOPM(sen2)); // aJav  cSirtp  si  isgnel  hterdade  algnaueg!
// console.log(senToArrWOPM(sen3)); // suSeatet  sude  ot  puadet  hte  tstae
// console.log(senToArrWOPM(sen4)); // aJav  cSirtp  si  a  yscnrhnouos
// console.log(senToArrWOPM(sen5)); // eRca!t!!
