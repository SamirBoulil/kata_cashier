const cashier = require ('./cashier');

test('adds simple product', () => {
  cashier.reset();
  cashier.addProduct('apples');
  cashier.addProduct('cherries');
  cashier.addProduct('bananas');

  expect(cashier.getTotal()).toBe(325);
});

test('apply cherries reduction', () => {
  cashier.reset();
  cashier.addProduct('cherries');
  cashier.addProduct('cherries');
  cashier.addProduct('bananas');
  cashier.addProduct('cherries');

  expect(cashier.getTotal()).toBe(75 + 75 + 150 + 75 - 20);
});

test('apply bananas reduction', () => {
  cashier.reset();
  cashier.addProduct('bananas');
  cashier.addProduct('cherries');
  cashier.addProduct('bananas');

  expect(cashier.getTotal()).toBe(150 + 75);
});

test('adds localized products', () => {
  cashier.reset();
  cashier.addProduct('apples');
  cashier.addProduct('cherries');
  cashier.addProduct('bananas');
  cashier.addProduct('pommes');
  cashier.addProduct('mele');

  expect(cashier.getTotal()).toBe(100 + 75 + 150 + 100 + 100);
});

test('reductions on mele and pommes', () => {
  cashier.reset();
  cashier.addProduct('mele');
  cashier.addProduct('pommes');
  cashier.addProduct('pommes');
  cashier.addProduct('apples');
  cashier.addProduct('pommes');
  cashier.addProduct('mele');
  cashier.addProduct('cherries');
  cashier.addProduct('cherries');

  expect(cashier.getTotal()).toBe(100 + 100 + 100 + 100 + 100 + 100 + 75 + 75 - 100 - 50 - 20);
});
