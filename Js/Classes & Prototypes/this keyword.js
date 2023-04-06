// The this keyword refers to the current context or scope but it's work differently with an arrow function;

const obj = {
  name: 'John',
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  }
};

obj.greet(); // Output: Hello, undefined!

// we define an object obj with a property name and a method greet. The greet method is an arrow function, and it tries to access the name property of the object using this.name. However, since the value of this is determined lexically in an arrow function, this refers to the global window object, which does not have a name property.


const obj2 = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

obj2.greet(); // Output: Hello, John!

// In this example, we define the greet method as a traditional function. Now, when we call obj.greet(), this refers to the object obj, so this.name correctly outputs the value John.