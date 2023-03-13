import { generateNumber } from '../utils.js';
import playGame from '../index.js';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const number = generateNumber(1, 50);
  const correctAnswer = checkPrime(number) ? 'yes' : 'no';
  const question = `${number}`;

  return [question, correctAnswer];
};

export default () => playGame(playPrime, gameMessage);
