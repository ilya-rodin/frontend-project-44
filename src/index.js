import greetUser from './cli.js';

const gamesNames = ['calc', 'even', 'gcd', 'prime', 'progression'];
const gamesMessages = [
  'What is the result of the expression?',
  'Answer "yes" if the number is even, otherwise answer "no".',
  'Find the greatest common divisor of given numbers.',
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  'What number is missing in the progression?',
];

const displayGameMessage = (gameName) => {
  if (gamesNames.includes(gameName)) {
    const message = gamesMessages[gamesNames.indexOf(gameName)];
    console.log(message);
  } else {
    console.log('Game name not found!');
  }
};

export default (playOneRound, repeats, gameName) => {
  const userName = greetUser();
  for (let i = 0; i < repeats; i += 1) {
    displayGameMessage(gameName);
    const [userAnswer, correctAnswer] = playOneRound(userName);

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
