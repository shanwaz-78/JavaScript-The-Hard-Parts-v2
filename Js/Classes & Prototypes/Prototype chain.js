const obj = {
  stuName : 'Kyle',
  age : 22,
}

console.log(obj.designation);

// it will doesn't find designation then will go the prototype and still he unable to find;

const obj2 = {
  stuName : 'Kyle',
  age : 22,
}

obj2.__proto__ = { // we insert the designation property in the prototype of obj2;
  designation : 'Developer',
};

console.log(obj2.designation); // he will be able to give us answer the of designation;