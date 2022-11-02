// Find  the factorial of the given number

// FACTORIAL : The factorial of a number is the product of all the numbers from 1 to that number.
// ex : 5! = 5 * 4 * 3 * 2 * 1 = 120


// METHOD 1 :
function factorial1(x) {
  // checking if number is negative
  if (x < 0) {
    return `Error! Factorial for negative number does not exist. Given number ${x} is negative`;
  }

  // if number is 0
  if (x === 0) {
    return `The factorial of ${x} is 1.`;
  } else {
    let fact = 1;
    for (let i = 1; i <= x; i++) {
      fact *= i;
    }
    return `The factorial of ${x} is ${fact}.`;
  }
}

// const result = factorial1(5);  // 120
// const result = factorial1(-5); //   error msg
// const result = factorial1(0);  // 0
// console.log(result);


// METHOD 2 :
function factorial2(number) {
  if (number < 0) {
    return `Error! Factorial for negative number does not exist. Given number ${number} is negative`;
  }

  // base case
  if (number === 0 || number === 1) {
    return 1;
  }
  // recursive case
  else {
    return number * factorial2(number - 1);
  }
}

//const result = factorial2(10);  // 120
//const result = factorial2(-5); //   error msg
//  const result = factorial1(0);  // 0
// console.log(result);
