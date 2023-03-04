import readlineSync from 'readline-sync';

export default () => {
  const number = Math.trunc(Math.random() * 100) + 1;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== correctAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    return false;
  }
  console.log('Correct!');
  return true;
};
