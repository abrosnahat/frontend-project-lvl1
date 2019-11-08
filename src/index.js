import readlineSync from 'readline-sync';

const salute = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  const quest = (count = 0) => {
    if (count === 3) return console.log(`Congratulations, ${name}!`);

    const rand = Math.floor(Math.random() * 101);

    console.log(`Question: ${rand}`);

    const answer = readlineSync.question('Your answer: ');

    if (rand % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      quest(count + 1);
      return undefined;
    }
    if (rand % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      quest(count + 1);
      return undefined;
    }
    if (rand % 2 === 0 && answer === 'no') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
    }
    if (rand % 2 !== 0 && answer === 'yes') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    }
    if (rand % 2 === 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
    }
    if (rand % 2 !== 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    }
    return undefined;
  };
  quest();
};

export default salute;
