import readlineSync from 'readline-sync';
import generateNumber from '../generate-number.js';

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

const generateTwoRandomNumbers = (maxNumber = 15) => [
  generateNumber(maxNumber),
  generateNumber(maxNumber),
];

export default () => {
  const [firstNumber, secondNumber] = generateTwoRandomNumbers(50);

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const correctAnswer = calcGCD(firstNumber, secondNumber);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};
