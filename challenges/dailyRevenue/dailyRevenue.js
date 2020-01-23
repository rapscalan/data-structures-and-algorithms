const revenue = (transactions) => {
  const offset = (new Date().getTimezoneOffset() - 60) * 1000 * 60;
  const result = transactions.reduce((acc, el) => {
    let date = new Date(el.timestamp + offset).toDateString();
    acc[date] = (acc[date] || 0) + el.price;
    return acc;
  }, {});
  return result;
};
module.exports = revenue;
