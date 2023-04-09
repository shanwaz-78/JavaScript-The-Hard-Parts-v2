// It's more more efficient and good method to store user data and our functionalities in one place;

function userCreator(name, score) {
  const newUser = Object.create(null);
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}
const user1 = userCreator("Will", 10);
const user2 = userCreator("Sentence", 5);
console.log(user1.name);