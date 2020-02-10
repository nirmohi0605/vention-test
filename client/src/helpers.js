export const formatPrice = x => {
    const priceInDollars = x / 100;
  return `$${priceInDollars.toFixed(2)}`;
};
