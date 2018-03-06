const products = [
  {
    code: ['apples'],
    price: 100
  },
  {
    code: ['pommes'],
    price: 100
  },
  {
    code: ['mele'],
    price: 100
  },
  {
    code: ['cherries'],
    price: 75,
  },
  {
    code: ['bananas'],
    price: 150
  }
];

const reductions = [
  (basket) => {
    const numberOfReductions = Math.floor(countItemsInBasket(basket, 'cherries')/2);

    return numberOfReductions * 20;
  },
  (basket) => {
    const numberOfcoupleOfBananas = Math.floor(countItemsInBasket(basket, 'bananas')/2);
    const bananaPrice = products.find(currentProduct => currentProduct.code.includes('bananas')).price;

    return bananaPrice * numberOfcoupleOfBananas;
  },
  (basket) => {
    const numberOfcoupleOfMele = Math.floor(countItemsInBasket(basket, 'mele')/2);

    return 100 * numberOfcoupleOfMele;
  },
  (basket) => {
    const numberOfTripleOfPomme = Math.floor(countItemsInBasket(basket, 'pommes')/3);

    return 200 * numberOfTripleOfPomme;
  },
  (basket) => {
    const numberOfQuadrupleOfApples = Math.floor((countItemsInBasket(basket, 'pommes') + countItemsInBasket(basket, 'mele') + countItemsInBasket(basket, 'apples')) / 4);

    return 100 * numberOfQuadrupleOfApples;
  },
  (basket) => {
    const groupOfFiveFruits = Math.floor(basket.length / 5);

    return 200 * groupOfFiveFruits;
  },
];

const addProduct = (basket, productCode) => {
  const productToBuy = findProduct(products, productCode)

  if (undefined !== productToBuy) {
    basket.push(productToBuy);
  }
}

const addProducts = (basket, productCodeCsv) => {
  const productCodes = productCodeCsv.split(',').map(value => value.trim());

  productCodes.forEach(productCode => addProduct(basket, productCode));
}

const getTotal = (basket) => {
  return basket.reduce((previous, current) => previous + current.price, 0) - applyReduction(basket);
}

const applyReduction = (basket) => {
  return reductions.reduce((previous, reductionCallback) => previous + reductionCallback(basket), 0);
}

const findProduct = (productLists, productCode) => {
  return productLists.find(currentProduct => currentProduct.code.includes(productCode));
}

const countItemsInBasket = (productLists, productCode) => {
  return productLists.filter(currentProduct => currentProduct.code.includes(productCode)).length;
}

module.exports = {addProduct, getTotal, addProducts};
