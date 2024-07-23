const readline = require('node:readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

read.question('', (name) => {
  const names = name.trim();
  if (names) {
    console.log(`Your name is: ${name}`);
  }
  read.close();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
