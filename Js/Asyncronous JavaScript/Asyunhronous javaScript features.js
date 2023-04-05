// JavaScript doesn't has featrues like setTimeOut() etc. let's say we apply setTimeOut then what would happen actually we request the browser for setTimeOut and timer it's label for browser it will request ot the internet and then he will return us. setTimeOut();

// What is V8;
// V8 is a runtime which has a call stack and heap, heap is used to memory allocation and stack is used to store all execution context when a function is exexuted;

// What is task queue;
// whatever task we keep it to waititng it will stored in task queue and he will exexute after tha time of period let's say => we use executing a function after 2s using setTimeOut() then he will wait 2s in task queue for exexuting;

// What is event loop;
// event loop pushes the tasks from task queues to call stack and they will be execute from call stack; let's see anothe instance => we have setTineOut() funtion and we running a funtion after 2s then he will go the Web Api's there are many web Api's like (fetch,setTimeOut) etc. then after 2s he will go the task queue after that the event loop take the values one by one from task queue and add them on the call stack and then he will be execute;