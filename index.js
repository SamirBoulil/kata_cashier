const cashier = require ('./cashier');

const stdin = process.openStdin();

const promptMessage = (message = '') => process.stdout.write(message);

promptMessage('> ');

const products = [
  {
    code: 'apples',
    price: 100
  },
  {
    code: 'cherries',
    price: 75
  },
  {
    code: 'bananas',
    price: 150
  }
];

var basket = [];

stdin.addListener('data', function(userInput) {
  const productCodesCsv = userInput.toString().trim();

  cashier.addProducts(basket, productCodesCsv);

  const total = cashier.getTotal(basket);

  promptMessage(`> ${productCodesCsv} -> ${total}`);
  promptMessage('\n> ');
});
