// Why do even have functions let's look at that;
// create a function that thakes no input and 10 squared
// What is the syntax the exect code we type;

function tenSquared() {
  return 10 * 10;
}
console.log(squared())

// we can make reusable our function using parameter and reuse it with different data's , values that's what perameter is for;

function squaredNum(num) {
  return num * num;
}
console.log(squaredNum(10)) // 100
console.log(squaredNum(7)) // 49
console.log(squaredNum(9)) // 81