import readlineSync from 'readline-sync';

const salute = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);

  const quest = (count = 0) => {
    if (count === 3) return console.log(`Congratulations, ${name}!`);

    const rand1 = Math.ceil(Math.random() * 10);
    const rand2 = Math.ceil(Math.random() * 9);
    const d = Math.ceil(Math.random() * 6);
    let str = '';
    let res = 0;
    const prog = (r) => {
      for (let i = 0; i < 10; i += 1) {
        if (rand2 === i) {
          res = r + i * d;
          str += '.. ';
        } else {
          str += `${r + i * d} `;
        }
      }
    };
    prog(rand1);
    console.log(`Question: ${str}`);

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
