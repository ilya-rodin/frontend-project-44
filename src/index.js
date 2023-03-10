import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const repeats = 3;

export default (playOneRound, gameMessage) => {
  const userName = greetUser();
  for (let i = 0; i < repeats; i += 1) {
    const [question, correctAnswer] = playOneRound(userName);
    console.log(gameMessage);
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
