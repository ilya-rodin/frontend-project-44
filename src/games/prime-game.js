import readlineSync from 'readline-sync';
import generateNumber from '../generate-number.js';

const checkPrime = (number) => {
  let isPrime = number !== 1;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

export default () => {
  const number = generateNumber(35);
  const correctAnswer = checkPrime(number) ? 'yes' : 'no';

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${number}`);

  const userAnswer = readlineSync.question('Your answer: ');

  return [userAnswer, correctAnswer];
};
