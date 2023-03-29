// Whenever a functions takes another function as an argument and return it as a result that's higer order function;

const interviewQuestios = (name) => {
  if (name === 'kyle') {
    return function (topic) {
      console.log(`Hello ${name}. What is ${topic}. Please Explain us.`);
    };
  }if (name === 'suzy') {
    return function (topic) {
      console.log(`Hello ${name}. What is ${topic}. Please Explain us.`);
    }
  }
}

// const cand1 = interviewQuestios('kyle')('UI')// ask only one question;
const cand1 = interviewQuestios('kyle');
cand1('UI'); // ask multiple quetions to a single user;
cand1('UX');
cand1('Front End Developer');

const cand2 = interviewQuestios('suzy');
cand2('Full Stack Developer'); // ask multiple qustions to the second user;
cand2('Data Base Engineer');