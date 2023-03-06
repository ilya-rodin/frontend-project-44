import readlineSync from 'readline-sync';
import generateNumber from '../generate-number.js';

const generateRandomNumbers = (maxNumber) => {
  const result = [];
  for (let i = 0; i < 2; i += 1) {
    result.push(generateNumber(maxNumber));
  }

  return result;
};

const generateOperator = (operators) => operators[generateNumber(operators.length - 1)];

export default () => {
  const operators = ['+', '-', '*'];
  const numbers = generateRandomNumbers(50);
  const [firstNumber, secondNumber] = numbers;
  const randomOperator = generateOperator(operators);

  let correctAnswer;
  switch (randomOperator) {
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

  console.log('What is the result of the expression?');
  console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};
