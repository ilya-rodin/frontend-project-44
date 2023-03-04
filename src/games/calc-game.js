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
  const randomOperator = generateOperator(operators);

  let correctAnswer;
  switch (randomOperator) {
    case '+':
      correctAnswer = numbers[0] + numbers[1];
      break;
    case '-':
      correctAnswer = numbers[0] - numbers[1];
      break;
    case '*':
      correctAnswer = numbers[0] * numbers[1];
      break;
    default:
      console.log('No match operator');
      break;
  }

  console.log('What is the result of the expression?');
  console.log(`Question: ${numbers[0]} ${randomOperator} ${numbers[1]}`);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  if (userAnswer !== correctAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    return false;
  }
  console.log('Correct!');
  return true;
};
