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

const generateRandomNumbers = (maxNumber) => {
  return [
    Math.floor(Math.random() * maxNumber + 1),
    Math.floor(Math.random() * maxNumber + 1),
  ];
};

export default () => {
  const [firstNumber, secondNumber] = generateRandomNumbers(50);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const correctAnswer = calcGCD(firstNumber, secondNumber);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};
