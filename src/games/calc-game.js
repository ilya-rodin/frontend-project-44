import readlineSync from 'readline-sync';
import generateNumber from '../utils.js';
import playSeveralTimes from '../index.js';

const generateOperator = (operators) => operators[generateNumber(operators.length - 1)];

const calcAnswer = (operator, firstNumber, secondNumber) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      console.log('No match operator');
      break;
  }

  return correctAnswer;
};

const playCalc = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = generateNumber(50);
  const secondNumber = generateNumber(50);
  const randomOperator = generateOperator(operators);
  const correctAnswer = calcAnswer(randomOperator, firstNumber, secondNumber);

  console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};

export default (repeats) => playSeveralTimes(playCalc, repeats);
