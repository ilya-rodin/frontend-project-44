import greetUser from './cli.js';

const displayGameMessage = (game) => {
  switch (game) {
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    default:
      console.log('Game not found!');
      break;
  }
};

const getGameName = (game) => game.name.slice(4).toLowerCase();

export default (playOneRound, repeats) => {
  const userName = greetUser();
  for (let i = 0; i < repeats; i += 1) {
    const gameName = getGameName(playOneRound);
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
