import { generateNumber } from '../utils.js';
import playGame from '../index.js';

const gameMessage = 'Find the greatest common divisor of given numbers.';

const calcGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return calcGCD(secondNumber, firstNumber % secondNumber);
};

const playGCD = () => {
  const firstNumber = generateNumber(1, 50);
  const secondNumber = generateNumber(1, 50);
  const correctAnswer = calcGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;

  return [question, correctAnswer.toString()];
};

export default () => playGame(playGCD, gameMessage);
