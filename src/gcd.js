import readlineSync from 'readline-sync';

const salute = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  const quest = (count = 0) => {
    if (count === 3) return console.log(`Congratulations, ${name}!`);

    const rand1 = Math.floor(Math.random() * 101);
    const rand2 = Math.floor(Math.random() * 101);

    console.log(`Question: ${rand1} ${rand2}`);
    const gcd = (a, b) => {
      if (b === 0) return a;
      return gcd(b, a % b);
    };

    const res = gcd(rand1, rand2);

    const answer = readlineSync.question('Your answer: ');

    if (res === Number(answer)) {
      console.log('Correct!');
      quest(count + 1);
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was ${res}. Let's try again, ${name}!`);
    }
    return undefined;
  };
  quest();
};

export default salute;
