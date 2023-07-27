function outer() {
  let x = 10;

  function inner1() {
    console.log(x);
  }

  function inner2() {
    x++;
  }

  return {
    func1: inner1,
    func2: inner2
  };
}

const closures = outer();
closures.func1(); // Output: 10
closures.func2();
closures.func1(); // Output: 11

// In this example, the outer() function returns an object with two methods: func1() and func2(). func1() is a closure that accesses the x variable from the outer scope and logs its value. func2() is also a closure that increments the x variable.

// When we call closures.func1(), it logs the value of x, which is 10. When we call closures.func2(), it increments the x variable to 11. When we call closures.func1() again, it logs the new value of x, which is 11.

// This example demonstrates how we can create multiple closures that share the same outer scope, and how changes to the outer scope made by one closure are visible to the other closures as well.
