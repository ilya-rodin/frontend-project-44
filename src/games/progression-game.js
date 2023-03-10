import generateNumber from '../utils.js';
import playSeveralTimes from '../index.js';

const gameMessage = 'What number is missing in the progression?';

const generateProgression = (start, step, maxElems) => {
  const progression = [];

  for (let i = 0; i < maxElems - 1; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const hideRandomElement = (progression) => {
  const hiddenElementIndex = generateNumber(0, progression.length - 1);
  const hiddenElement = progression[hiddenElementIndex];
  const progressionCopy = [...progression];

  progressionCopy[hiddenElementIndex] = '..';
  const result = progressionCopy.join(' ');

  return [hiddenElement, result];
};

const playProgression = () => {
  const start = generateNumber(1, 15);
  const step = generateNumber(5, 15);
  const maxElems = generateNumber(6, 15);
  const progression = generateProgression(start, step, maxElems);
  const [correctAnswer, progressionString] = hideRandomElement(progression);
  const question = `Question: ${progressionString}`;

  return [question, correctAnswer.toString()];
};

export default () => playSeveralTimes(playProgression, gameMessage);
