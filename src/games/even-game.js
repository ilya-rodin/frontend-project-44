import { generateNumber } from '../utils.js';
import playSeveralTimes from '../index.js';

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const playEven = () => {
  const number = generateNumber(1, 150);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, correctAnswer];
};

export default () => playSeveralTimes(playEven, gameMessage);
