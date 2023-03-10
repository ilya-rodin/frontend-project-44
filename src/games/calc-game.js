import generateNumber from '../utils.js';
import playSeveralTimes from '../index.js';

const gameMessage = 'What is the result of the expression?';

const generateOperator = (operators) => operators[generateNumber(0, operators.length - 1)];

const calcAnswer = (operator, firstNumber, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      console.log('No match operator');
      return null;
  }
};

const playCalc = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = generateNumber(1, 50);
  const secondNumber = generateNumber(1, 50);
  const randomOperator = generateOperator(operators);
  const correctAnswer = calcAnswer(randomOperator, firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${randomOperator} ${secondNumber}`;

  return [question, correctAnswer.toString()];
};

export default () => playSeveralTimes(playCalc, gameMessage);
