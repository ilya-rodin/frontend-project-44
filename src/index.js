import greetUser from './cli.js';

export default (callback, repeats) => {
  const userName = greetUser();
  let nextRound;
  for (let i = 0; i < repeats; i += 1) {
    nextRound = callback(userName);

    if (!nextRound) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
