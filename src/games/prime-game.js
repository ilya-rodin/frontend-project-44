import { generateNumber } from '../utils.js';
import playSeveralTimes from '../index.js';

const gameMessage =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (number) => {
  let isPrime = number !== 1;
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const playPrime = () => {
  const number = generateNumber(1, 50);
  const correctAnswer = checkPrime(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, correctAnswer];
};

export default () => playSeveralTimes(playPrime, gameMessage);
