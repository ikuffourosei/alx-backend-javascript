const Utils = {
    calculateNumber: (type, a, b) => {
      const roundedA = Math.round(a);
      const roundedB = Math.round(b);
  
      switch(type) {
        case 'SUM':
          return roundedA + roundedB;
        case 'SUBTRACT':
          return roundedA - roundedB;
        case 'DIVIDE':
          if (roundedB === 0) {
            return 'Error';
          }
          return roundedA / roundedB;
        default:
          throw new Error('Invalid operation type');
      }
    },
  
    sendPaymentRequestToApi: (totalAmount, totalShipping) => {
      const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
      console.log(`The total is: ${total}`);
    }
  };
  
  module.exports = Utils;
  