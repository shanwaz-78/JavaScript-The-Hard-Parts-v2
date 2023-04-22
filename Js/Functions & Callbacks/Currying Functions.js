// Currying is a technique in functional programmaxg that allows you to transform a function with multiple arguments into a sequence of functions

function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}
function sum(a, b) {
  return a + b;
}
const result = curry(sum);
console.log(result(20)(20));