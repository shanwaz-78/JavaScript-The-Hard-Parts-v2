// Higher Order Functions =>  A function that takes another function(s) as an argument(s) and/or returns a function as a value.

// Callback functions => A function that is passed to another function.

// Higher order function example :-

function copyArray(arr,instructions) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(instructions(arr[i]));
  }
  return newArr;
}
const arr2 = [1,2,3];
function multiplyBy2(input) {
  return input * 2;
}
console.log(copyArray(arr2,multiplyBy2));