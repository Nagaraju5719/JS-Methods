// # FORMAT THE ELES INTO COMMA SEPARATED STRS AND LAST TWO WITH & IN AN ARRAY //

let arr = [
  { name: "Brat" },
  { name: "Robot" },
  { name: "Avatar" },
  { name: "Groot" },
]; // o/p ===> "Brat, Robot, Avatar & Groot"

// 1.
function strModification(arr) {
  let finalStr = "";
  arr.forEach((arrEles, arrIndex) => {
    const name = arrEles.name;

    if (arrIndex === arr.length - 1) {
      finalStr = finalStr + " & " + name;
    } else if (arrIndex === arr.length - 2) {
      finalStr = finalStr + name;
    } else {
      finalStr = finalStr + name + ", ";
    }
  });
  return finalStr;
}

// console.log(strModification(arr));

// 2.

function formatStr(arr) {
  return arr.reduce((previous, current, index, array) => {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return previous + " & " + current.name;
    } else {
      return previous + ", " + current.name;
    }
  },"");
}

console.log(formatStr(arr));
