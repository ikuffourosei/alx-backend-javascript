const readline = require('node:readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ques = 'Welcome to Holberton School, what is your name?\n';

read.question(ques, (name) => {
  console.log(`Your name is: ${name}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
