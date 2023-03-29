function copyArrayMultiplyBy2(array) {
  let newArr = [];
  for(const i of array){ // run the loop till the length of the array;
    newArr.push(i * 2); // that's the repeating functionality the for loop running again n again and multiply value;
  }
  return newArr;
}
let array = [1,2,3];
console.log(copyArrayMultiplyBy2(array))