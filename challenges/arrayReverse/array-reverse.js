const arrayReverse = arr => {
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result[i] = arr[arr.length - i - 1];
  }
  return result;
};

const arrayReverse2 = arr => {
  const result = [];
  arr.forEach((number, index, arr) => result[index] = arr[arr.length - index - 1]);
  return result;
};

const arrayReverse3 = arr => {
  const result = [];
  arr.forEach((number) => result.unshift(number));
  return result;
};
module.exports = { arrayReverse, arrayReverse2, arrayReverse3 };
