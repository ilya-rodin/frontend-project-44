import greetUser from './cli.js';

export default (callback, repeats) => {
  const userName = greetUser();
  for (let i = 0; i < repeats; i += 1) {
    const answers = callback(userName);

    if (answers[0] !== answers[1]) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
