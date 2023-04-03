// I called the outer function and when he run he will se counter then move on towards inner function (second function then we incrementing the counter first it will increment the counter and store it in ur own identifire after that i exicuting the incrementCounter() and it will make new exicution context and there is two faces 1. code exicution face 2. local memory(function execution context) it wlll find counter first in ur own local memory and could not find then it will go to outer local memory and he found it there then he will increment it and return us as output. )


function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();


// Closure

// The outer2 function then returns the inner2 function. When the outer2 function is called and returns the inner2 function, a closure is created. The closure includes the teacher variable and the inner2 function.

// The stored variable is then assigned the inner2 function that was returned by outer2.

// Finally, when stored(22) is called, the inner2 function is executed with an age argument of 22. The inner2 function has access to the teacher variable because of the closure that was created when the outer2 function re/wp-content/uploads/2022/08/P5.pngturned the inner2 function. Specifically, the inner2 function has a reference to the teacher variable that was created in the outer2 function's scope, and can access that variable even though it is no longer in scope.


function outer2() {
  const teacher = 'Kyle, ';

  function inner2(age) {
    console.log(teacher + age);
  }
  return inner2;
}
const stored = outer2();
stored(22);    