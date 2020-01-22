const revenue = (transactions) => {
  const result = transactions.reduce((acc, el) => {
    let date = new Date(el.timestamp).toDateString();
    acc[date] = (acc[date] || 0) + el.price;
    return acc;
  }, {});
  return result;
};
module.exports = revenue;
