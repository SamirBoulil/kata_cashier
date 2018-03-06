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

  expect(cashier.getTotal(basket)).toBe(100 + 75 + 150 + 100 + 100);
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

  expect(cashier.getTotal(basket)).toBe(100 + 100 + 100 + 100 + 100 + 100 + 75 + 75 - 200 - 100 - 20);
});
