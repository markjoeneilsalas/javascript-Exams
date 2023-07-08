function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let maxProfit = -Infinity;
  let topProduct = "";

  for (let i = 0; i < productProfitArray.length; i++) {
    const { product, profit } = productProfitArray[i];
    if (profit > maxProfit) {
      maxProfit = profit;
      topProduct = product;
    }
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let minProfit = Infinity;
  let bottomProduct = "";

  for (let i = 0; i < productProfitArray.length; i++) {
    const { product, profit } = productProfitArray[i];
    if (profit < minProfit) {
      minProfit = profit;
      bottomProduct = product;
    }
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let closestProfit = Infinity;
  let zeroProfitProduct = "";

  for (let i = 0; i < productProfitArray.length; i++) {
    const { product, profit } = productProfitArray[i];
    if (Math.abs(profit) < Math.abs(closestProfit) || (profit === closestProfit && profit > 0)) {
      closestProfit = profit;
      zeroProfitProduct = product;
    }
  }

  return zeroProfitProduct;
}

// Example usage:
const productProfitArray = [
  { product: "Product A", profit: 100 },
  { product: "Product B", profit: -200 },
  { product: "Product C", profit: 50 },
  { product: "Product D", profit: -100 },
];

console.log(topProduct(productProfitArray));
console.log(bottomProduct(productProfitArray));
console.log(zeroProfitProduct(productProfitArray));
