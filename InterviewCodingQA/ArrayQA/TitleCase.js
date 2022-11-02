// capitalizing the eah letter of the word in a str

function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }

  return strArr.join(" ");
}

const result = titleCase("I am a fullstack developer");
console.log(result);
