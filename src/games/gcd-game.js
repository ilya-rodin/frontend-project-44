import readlineSync from 'readline-sync';

const calcGCD = (firstNumber, secondNumber) => {
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return firstNumber;
};

const generateRandomNumbers = () => {
  return [
    Math.floor(Math.random() * 50 + 1),
    Math.floor(Math.random() * 50 + 1),
  ];
};

export default () => {
  const [firstNumber, secondNumber] = generateRandomNumbers();
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const correctAnswer = calcGCD(firstNumber, secondNumber);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};
