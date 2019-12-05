const binarySearch = require('../array-binary-search').binarySearch;

describe('binary search', () => {
  it('validate binary search', () =>{
    expect(binarySearch([1, 2, 3, 4, 5], 2, 0)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4, 5, 6], 7, 0)).toEqual(-1);
    expect(binarySearch([1, 3, 5, 7, 88, 89, 92], 92, 0)).toEqual(6);
    expect(binarySearch([1, 3, 5, 7, 88, 89, 92], 88, 0)).toEqual(4);
    expect(binarySearch([1, 3, 5, 7, 88, 89, 92], 5, 0)).toEqual(2);
  });
});
