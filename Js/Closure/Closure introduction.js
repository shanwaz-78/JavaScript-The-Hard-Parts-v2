// Functions get a new memory evey run/invoction.

// every time function get executed,run,invoke as an invocation,it creates a brand new local memory.(brad new execution context)

// when we finish running that function,that's all deleted.(doesn't remember the previous running, the data stored in the previous running of the function.)

// function never remember anything form their previous running,that local memory that gets created inside the running mutltiplyByTwo,fresh every time.

// what if we could have that function also have a permanent memory attached to it?
// Ans:- that could change everything about how we write code.


// Functions with Memories:--------

// :-- When our function get called ,we create a live store fo data[local memory/variable enviroment/state ] for that function's execution context.

// :--When the function finishes executing its local memory is deleted [execpt the returned value].

// :-- but what if our functions could hold on to live data b/w executions?(next time run the code it have some memory,some rememberance of its previous execution.)

// :-- This would let our function definitions have an associated cache/persistent memory.---(that would let our function definitions,the function definition itself.

// notice:- when we run it have a little memory,But the definition itself have a persistent memory attached like a permanent memory attached to it)---

// :-- But it all starts with us returning a function from another function.
