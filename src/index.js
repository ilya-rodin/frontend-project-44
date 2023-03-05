import greetUser from './cli.js';

export default (callback, repeats) => {
  const userName = greetUser();
  for (let i = 0; i < repeats; i += 1) {
    const [userAnswer, correctAnswer] = callback(userName);

    if (userAnswer !== correctAnswer) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
