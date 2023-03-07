import readlineSync from 'readline-sync';
import generateNumber from '../utils.js';
import playSeveralTimes from '../index.js';


const playEven = () => {
  const number = generateNumber(100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return [userAnswer, correctAnswer];
};

export default (repeats) => playSeveralTimes(playEven, repeats);