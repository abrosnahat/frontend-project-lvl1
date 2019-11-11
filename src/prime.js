import readlineSync from 'readline-sync';

const salute = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  const quest = (count = 0) => {
    if (count === 3) return console.log(`Congratulations, ${name}!`);

    const rand1 = Math.ceil(Math.random() * 101);

    const isPrime = (num) => {
      let x = 0;
      for (let i = 0; i <= num; i += 1) {
        if (num % i === 0) x += 1;
      }
      if (x === 2) return true;
      return false;
    };
    isPrime(rand1);

    console.log(`Question: ${rand1}`);

    const answer = readlineSync.question('Your answer: ');

    if (isPrime(rand1) === true && answer === 'yes') {
      console.log('Correct!');
      quest(count + 1);
    }
    if (isPrime(rand1) === false && answer === 'no') {
      console.log('Correct!');
      quest(count + 1);
    }
    if (isPrime(rand1) === true && answer === 'no') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
    }
    if (isPrime(rand1) === false && answer === 'yes') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
    }
    return undefined;
  };
  quest();
};

export default salute;
