import { generateNumber } from '../utils.js';
import playGame from '../index.js';

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const playEven = () => {
  const number = generateNumber(1, 150);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;

  return [question, correctAnswer];
};

export default () => playGame(playEven, gameMessage);
