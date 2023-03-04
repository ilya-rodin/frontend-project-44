import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

export default () => {
  const userName = greetUser();
  const number = Math.trunc(Math.random() * 100) + 1;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}`);
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}')`
    );
    console.log(`Let's try again, ${userName}!`);
  }
};
