import greetUser from './cli.js';

export default (playOneRound, repeats) => {
  const userName = greetUser();
  for (let i = 0; i < repeats; i += 1) {
    const [userAnswer, correctAnswer] = playOneRound(userName);

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
