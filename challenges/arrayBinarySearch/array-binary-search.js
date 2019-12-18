const binarySearch = (arr, val, index) => {
  if(arr.length === 0){
    return -1;
  }
  const midpoint = Math.floor(arr.length / 2);
  const midpointValue = arr[midpoint];
  if(midpointValue === val){
    return midpoint + index;
  } 
  else if(midpointValue < val){
    // search  upper array
    return binarySearch(arr.slice(midpoint + 1), val, index += midpoint + 1);
  }
  else {
    // search lower array
    return binarySearch(arr.slice(0, midpoint), val, index);
  }
};
module.exports = { binarySearch };
