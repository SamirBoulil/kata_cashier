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
  const productCodes = userInput.toString().trim().split(',').map(value => value.trim());

  productCodes.forEach(productCode => cashier.addProduct(productCode));

  const total = cashier.getTotal();

  promptMessage(`> ${productCodes.join(',')} -> ${total}`);
  promptMessage('\n> ');
});
