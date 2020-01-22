const revenue = (transactions) => {
  //{ price: 5, timestamp: 1571176523720 }
  // 11th June 2019, 8am (in my Local Time, Singapore)
// new Date(1560211200000)
  const result = transactions.reduce((acc, el) => {
    let date = new Date(el.timestamp).toDateString();
    acc[date] = (acc[date] || 0) + el.price;
    //acc[acc[new Date(el.timestamp)] += el.price;
    return acc;
  }, {});
  return result;
};
//{ 'Thu Jul 18 2019': 25,
//'Thu Jul 04 2019': 47,
module.exports = revenue;
