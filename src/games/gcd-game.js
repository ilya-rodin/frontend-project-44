import readlineSync from 'readline-sync';
import generateNumber from '../utils.js';
import playSeveralTimes from '../index.js';

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
  const [firstNumber, secondNumber] = generateNumber(50, 2);

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const correctAnswer = calcGCD(firstNumber, secondNumber);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};

export default (repeats) => playSeveralTimes(playGCD, repeats);
