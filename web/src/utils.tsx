export const getDiscountPrice = (price: number, discount: number) => {
  const pricePercent = (discount / 100) * price;
  const currentPrice = (price - pricePercent).toFixed(2);
  return currentPrice;
};
