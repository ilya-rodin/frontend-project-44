import readlineSync from 'readline-sync';

const generateRandomNumbers = () => {
  const result = [];
  for (let i = 0; i < 2; i += 1) {
    result.push(Math.floor(Math.random() * 50 + 1));
  }
  return result;
};

const generateOperator = (operators) =>
  operators[Math.floor(Math.random() * operators.length)];

export default () => {
  const operators = ['+', '-', '*'];
  const numbers = generateRandomNumbers();
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