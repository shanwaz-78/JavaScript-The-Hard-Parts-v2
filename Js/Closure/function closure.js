function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

const innerFunc = outer();

innerFunc(); // Output: 10

// In this example, outer() defines a variable x and a function inner(). inner() has access to x, because it was defined in the same scope as x. The outer() function then returns the inner() function. When we call outer(), it returns inner(), which is assigned to the variable innerFunc.

// Finally, when we call innerFunc(), it outputs the value of x, which is still accessible to the inner() function, even though outer() has already returned.

// This is a closure in action - the inner() function "closes over" the variable x from its outer scope, and retains a reference to it even after the outer function has finished executing.