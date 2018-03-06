const cashier = require ('./cashier');

test('adds simple product', () => {
  var basket = [];
  cashier.addProduct(basket, 'apples');
  cashier.addProduct(basket, 'cherries');
  cashier.addProduct(basket, 'bananas');

  expect(cashier.getTotal(basket)).toBe(325);
});

test('apply cherries reduction', () => {
  var basket = [];
  cashier.addProduct(basket, 'cherries');
  cashier.addProduct(basket, 'cherries');
  cashier.addProduct(basket, 'bananas');
  cashier.addProduct(basket, 'cherries');

  expect(cashier.getTotal(basket)).toBe(75 + 75 + 150 + 75 - 20);
});

test('apply bananas reduction', () => {
  var basket = [];
  cashier.addProduct(basket, 'bananas');
  cashier.addProduct(basket, 'cherries');
  cashier.addProduct(basket, 'bananas');

  expect(cashier.getTotal(basket)).toBe(150 + 75);
});

test('adds localized products', () => {
  var basket = [];
  cashier.addProduct(basket, 'apples');
  cashier.addProduct(basket, 'cherries');
  cashier.addProduct(basket, 'bananas');
  cashier.addProduct(basket, 'pommes');
  cashier.addProduct(basket, 'mele');

  expect(cashier.getTotal(basket)).toBe(100 + 75 + 150 + 100 + 100 - 200);
});

test('reductions on mele and pommes', () => {
  var basket = [];
  cashier.addProduct(basket, 'mele');
  cashier.addProduct(basket, 'pommes');
  cashier.addProduct(basket, 'pommes');
  cashier.addProduct(basket, 'apples');
  cashier.addProduct(basket, 'pommes');
  cashier.addProduct(basket, 'mele');
  cashier.addProduct(basket, 'cherries');
  cashier.addProduct(basket, 'cherries');

  expect(cashier.getTotal(basket)).toBe(100 + 100 + 100 + 100 + 100 + 100 + 75 + 75 - 200 - 100 - 20 - 200 - 100);
});

test('Hot deals', () => {
  var basket = [];
  cashier.addProducts(basket, 'mele,pommes,apples,pommes,mele');
  expect(cashier.getTotal(basket)).toBe(100);

  cashier.addProducts(basket, 'bananas');
  expect(cashier.getTotal(basket)).toBe(250);
});

test('Hot deals', () => {
  var basket = [];
  cashier.addProduct(basket, 'mele'); //+100
  cashier.addProduct(basket, 'pommes'); //+100
  cashier.addProduct(basket, 'pommes'); //+100
  cashier.addProduct(basket, 'mele'); //+100 - 100 - 100
  expect(cashier.getTotal(basket)).toBe(200);
  cashier.addProduct(basket, 'bananas'); // 150 - 200
  expect(cashier.getTotal(basket)).toBe(150);
  cashier.addProduct(basket, 'mele'); //100
  cashier.addProduct(basket, 'pommes'); // 100 - 200
  cashier.addProduct(basket, 'pommes'); // 100
  cashier.addProduct(basket, 'apples'); // 100 - 100
  cashier.addProduct(basket, 'mele'); // 100 - 200 - 100
  expect(cashier.getTotal(basket)).toBe(50);
});

//50

