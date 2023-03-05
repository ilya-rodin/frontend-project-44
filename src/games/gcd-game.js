import readlineSync from 'readline-sync';

const calcGCD = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= firstNumber;
    }
  }
  return first;
};

const generateRandomNumbers = (maxNumber) => [
  Math.floor(Math.random() * maxNumber + 1),
  Math.floor(Math.random() * maxNumber + 1),
];

export default () => {
  const [firstNumber, secondNumber] = generateRandomNumbers(50);
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const correctAnswer = calcGCD(firstNumber, secondNumber);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};
