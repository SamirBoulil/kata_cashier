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
  const productCode = userInput.toString().trim();

  const productToBuy = products.find(currentProduct => productCode === currentProduct.code)

  if (undefined !== productToBuy) {
    basket.push(productToBuy);
  }

  const total = basket.reduce((previous, current) => previous + current.price, 0);

  promptMessage(`> ${productCode} -> ${total}`);
  promptMessage('\n> ');
});
