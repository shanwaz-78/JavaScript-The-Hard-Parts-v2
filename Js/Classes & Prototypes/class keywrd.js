// We can say the class keyword is a blue print for creating objeccts whenver we make object of class it will return us object with attached fucntion and the function would be our cunstructur and whenever i make obj of class the costructor will call automatically and all functions and methods will be go the prototype of that class;

class scStudent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    const data = "Hello";
    console.log(data);
  }
}
const obj = new scStudent("John", 19);
console.log(obj);

class secondStudent extends scStudent {}
const user = new secondStudent("Sentence", 20);
console.log(user)

