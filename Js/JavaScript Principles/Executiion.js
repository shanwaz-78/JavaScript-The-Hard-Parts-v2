// our code is runs on browser and every browser has js execution context and we need an enviroment for run the code which means we called execution context;

// There are two types of execution context 1. global 2.function.

// And in javascript we has a bydefault global execution context means =>

// 1) we dont start the execute the code but ur browser and in browser ur js exexution context created a global execution context for us.

// 2 ) And whoever variables are not inside of any function that's mean they are on global execution context.

// 3 ) while we dont call a function it will stay in global execution context. (but jab bhi hum function ko call kar denge to jitne bhi functions hain usko ak new execution context mil jayega and wo fir apne hi execution context ke ander changes karega);

        // Let's see it with an example;

const name = 'kyle';
function a() {
    const name = 'kyle';
    debugger;
    b();
    console.log('This is last console');
}

function b() {
    debugger;
    console.log('This is first msg')
    c()
}

function c() {
    debugger;
    console.log('This is 2nd msg')
}
debugger;
a();    