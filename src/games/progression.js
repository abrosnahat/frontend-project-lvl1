import game from '../engine';
import random from '../random';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const getData = () => {
  const firstMember = random(1, 10);
  const step = random(1, 6);

  const randomHiddenElementIndex = random(1, lengthProgression - 1);
  const correctAnswer = String(firstMember + step * randomHiddenElementIndex);
  const progression = [];

  for (let i = 0; i < lengthProgression; i += 1) {
    if (i === randomHiddenElementIndex) {
      progression.push('..');
    } else {
      progression.push(firstMember + step * i);
    }
  }

  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => game(description, getData);
