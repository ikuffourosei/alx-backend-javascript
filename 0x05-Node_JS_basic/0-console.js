const process = require('process');

function displayMessage(value) {
  process.stdout.write(`${value} \n`);
}

module.exports = displayMessage;
