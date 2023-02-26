// JAvaScript principles

// when js code runs,it:(do two thing)

// 1: Goes through the code line-by-line and runs/'executes' each line-khown as the thread of execution

// 2:Saves'data' like strings and arrays so we can use that data later-in its memory;
// we can even save code.

// ['functions']

const num = 3;
// identifier(label) (num)
// defining consatnt call num.and assign it value 3.
function multiplyBy2(inputNumber){
    //defining the function multiplyBy2.
    // when we define a function,there's two parts.
    // 1 identifier {fancy word}(label):-label for anything you store in computer memory.

    // 2 take all the code of function bundle it up,and store in computer memory,like string char.'s .

    const result = inputNumber * 2;
    // resolve inputNumber *2 =6 is assign to const result(save).

    return result;
    // it saying that locate the block of memory that is bound to the label resolve and ship it return it shoots it out.
}
// variable as  a generic term for label + data, identifier + data,it means.i can vary the data that i store in the label.and with the constant i can't vary.i can't take away what i had stored there before and store something else there.

// invocation turn into the value that,that stored(value is anything that stored not a label)

// return out and assign to output.
// what tells me this right hand side is command?
// Ans:- parenthesis
const output =multiplyBy2(num);//it command(parenthesis)
// define constant output(identifier)
// assign function call(multiplyBy2(num))
// only store values(that's fixed and final things)can't store a go do some work
const newOutput =multiplyBy2(10);