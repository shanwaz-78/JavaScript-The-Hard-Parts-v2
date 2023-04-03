// The "retain function" aspect of closures in JavaScript refers to the ability of an inner function to retain a reference to the variables and parameters of its outer function, even after the outer function has returned.

// When an inner function is defined inside an outer function in JavaScript, the inner function has access to all of the variables and parameters of the outer function. This is because the inner function is defined within the scope of the outer function, and so it can "close over" those variables and retain a reference to them.

function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

const innerFunc = outer();

innerFunc(); // Output: 10

// In this example, the inner() function retains a reference to the x variable from its outer scope, even after the outer() function has returned. This is possible because the inner() function is defined within the scope of outer(), and so it can "close over" the x variable and retain a reference to it.

// When we call innerFunc(), it outputs the value of x, which is still accessible to the inner() function, even though outer() has already returned.