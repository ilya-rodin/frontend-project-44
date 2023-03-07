import readlineSync from 'readline-sync';
import generateNumber from '../utils.js';
import playSeveralTimes from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const playEven = () => {
  const number = generateNumber(100);
  const correctAnswer = isEven(number);

  console.log(`Question: ${number}`);

  let userAnswer = readlineSync.question('Your answer: ');
  userAnswer = userAnswer === 'yes';

  return [userAnswer, correctAnswer];
};

export default (repeats) => playSeveralTimes(playEven, repeats);
