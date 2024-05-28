function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    if (num <= 0.5) {
      resolve('Yay! it worked');
    } else {
      reject(new Error('Oops! Failed!'));
    }
  });
}

module.exports = getResponseFromAPI;
