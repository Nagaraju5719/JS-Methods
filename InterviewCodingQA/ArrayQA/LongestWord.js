//  FINDING THE LONGEST WORD IN THE GIVEN STRING

// APPROCH :
// 1. convert to array by separator
// 2. take an empty str in an varible
// 3. loop over the elem of array
// 4. if the new word length is greater than the old one replace with new one.

function longestWord(str) {
  // convert to array by separator
  const separator = " ";
  const strArr = str.split(separator);
  // initializing the longest word
  let longestWord = "";

  // METHOD 1 : ( looping )
  //   for (let word of strArr) {
  //     if (word.length > longestWord.length) {
  //       longestWord = word;
  //     }
  //   }

  //--------------------------------------------------

  // METHOD 2 :

  // longestWord=strArr.reduce((a,b)=>{
  //     return a.length > b.length ? a : b
  // })

  //--------------------------------------------------

  // METHOD 3 :

  //   longestWord = strArr.sort((a, b) => {
  //     return b.length - a.length;
  //   })[0];

  //--------------------------------------------------

  // METHOD 4 :

  strArr.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

// const result= longestWord(" I am a fullstack developer") // fullsatck
const result = longestWord(
  "  I was worked at impelsys pvt ltd before coming to this organization"
); // organization
console.log(result);

// NOTE :  if more than one word matches the length then it will return the first word.
