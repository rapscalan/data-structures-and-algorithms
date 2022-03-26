const insertShiftArray = (arr, val) => {
  const result = [];
  const midpoint = Math.floor(arr.length / 2);
  let i =  0;
  arr.forEach(el => {
    if(i === midpoint){
      result[i++] = val;
    }
    result[i++] = el;
  });
  return result;
};

const removeShiftArray = (arr) => {
  const result = [];
  const midpoint = Math.floor(arr.length / 2);
  let i = 0;
  let j = 0;
  arr.forEach(el => {
    result[j++] = el;
    if(i++ === midpoint){
      j--;
    }
  });
  return result;
};
module.exports = { insertShiftArray, removeShiftArray };
