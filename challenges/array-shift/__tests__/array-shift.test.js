const { insertShiftArray, removeShiftArray } = 
    require('../array-shift');
describe('array-shift functions', () => {
  it('insertShiftArray inserts ', () => {
    expect(insertShiftArray([1, 2, 3, 5, 6, 7], 4)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(insertShiftArray([1, 2], 3)).toEqual([1, 3, 2]);
  });
  it('removeShiftArray removes midpoint value', () => {
    expect(removeShiftArray([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 5, 6, 7]);
    expect(removeShiftArray([1, 2, 3, 4])).toEqual([1, 2, 4]);
  });
});
