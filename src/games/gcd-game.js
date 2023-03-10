import generateNumber from '../utils.js';
import playSeveralTimes from '../index.js';

const gameMessage = 'Find the greatest common divisor of given numbers.';

const calcGCD = (firstNumber, secondNumber) => {
  let result = firstNumber;
  let second = secondNumber;
  while (result !== second) {
    if (result > second) {
      result -= second;
    } else {
      second -= result;
    }
  }
  return result;
};

const playGCD = () => {
  const firstNumber = generateNumber(1, 50);
  const secondNumber = generateNumber(1, 50);
  const correctAnswer = calcGCD(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;

  return [question, correctAnswer.toString()];
};

export default () => playSeveralTimes(playGCD, gameMessage);
