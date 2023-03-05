import readlineSync from 'readline-sync';

const generateProgression = () => {
  const progression = [];
  const progressionLength = 5 + Math.floor(Math.random() * 5 + 1);
  const progressionDiff = Math.floor(Math.random() * 15 + 1);

  let previous;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      const firstItem = Math.floor(Math.random() * 30 + 1);
      progression.push(firstItem);
      previous = firstItem;
    } else {
      const item = previous + progressionDiff;
      previous = item;
      progression.push(item);
    }
  }

  return progression;
};

const hideRandomElement = (progression) => {
  const hiddenElementIndex = Math.floor(Math.random() * progression.length);
  const hiddenElement = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';

  return [hiddenElement, progression.join(' ')];
};

export default () => {
  const progression = generateProgression();
  const [correctAnswer, progressionString] = hideRandomElement(progression);

  console.log('What number is missing in the progression?');
  console.log(`Question: ${progressionString}`);

  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};
