function sample(input) {
  return 2 * input;
}
sample.stored = 'Kyle';
console.log(sample(10)) // 20, we calling the function not access the property stored;
console.log(sample.stored) // 'Kyle', we accessing the property here;

// It will return us fucntion with attached a obj with the property stored;