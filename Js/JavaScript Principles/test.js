const str = '1';
console.log(+str - 1)
var obj1 = { // 
    name : 'kyle'
}
var obj = obj1 // passes the reference
console.log(obj == obj1)

// function fn(name) {
//     this.name = name
// }

// ||(Or) operator finds the truty value first;
// && (And) operator finds the falsey value first;

console.log([1] == true) // he will take out the value 1
console.log([''] == true)
console.log(0 === -0)
console.log(String(0) == Number.parseFloat(-0))

const myStr = 'Hello';
const newStr = myStr.toLowerCase();
console.log(myStr);
console.log(newStr);

const arr1 = [1,2,3];
const arr2 = arr1;
console.log(arr1);
console.log(arr2);

arr2.push(4);
console.log(arr1)
console.log(arr2);
const a = 10 - 'kyle';
console.log(typeof a)

console.log('\n');
console.log(null || 0 || true) // it will find truthy value first 

let num = 2;
console.log(2 * ++num) // it will increment first after that multiply it;
console.log(2 * num++) // it will multiply first;

console.log(undefined > 0)  // false, because the undefined converted into NAN and when we compare a NAN to anything it will give false always;
console.log(undefined < 0) // false ,because the undefined converted into NAN and when we compare a NAN to anything it will give false always;
console.log(undefined == 0) // false, because the undefined converted into NAN and when we compare a NAN to anything it will give false always;

console.log("2" > "12") // true becuase it will find the first string charactor wise;