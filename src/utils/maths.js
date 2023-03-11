export const formatPrice = (price) => {
  let decimal = Math.floor(price * 10) / 10;
  return decimal.toFixed(2) + " €";
};

