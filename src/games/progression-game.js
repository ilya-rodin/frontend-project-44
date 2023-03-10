import readlineSync from 'readline-sync';
import { generateNumber } from '../utils.js';
import playSeveralTimes from '../index.js';

const generateProgression = (minLength) => {
  const progression = [];
  const progressionLength = generateNumber(minLength, 10);
  const progressionDiff = generateNumber(15);

  let previous;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      const firstItem = generateNumber(20);
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
  const hiddenElementIndex = generateNumber(progression.length - 1);
  const hiddenElement = progression[hiddenElementIndex];
  const progressionCopy = [...progression];

  progressionCopy[hiddenElementIndex] = '..';
  const result = progressionCopy.join(' ');

  return [hiddenElement, result];
};

const playProgression = () => {
  const progression = generateProgression(5);
  const [correctAnswer, progressionString] = hideRandomElement(progression);

  console.log(`Question: ${progressionString}`);
  const userAnswer = readlineSync.questionInt('Your answer: ');

  return [userAnswer, correctAnswer];
};

export default (repeats) => playSeveralTimes(playProgression, repeats, 'progression');
