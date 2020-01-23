const Set = require('../Set');

let testSet1;
let testSet2;
beforeAll(() => {
  testSet1 = new Set();
  [1, 2, 3, 4, 5, 6, 7].forEach(el => {
    testSet1.add(el);
  });
  testSet2 = new Set();
  [5, 6, 7, 8, 9, 10].forEach(el => {
    testSet2.add(el);
  });
});

describe('Set functions', ()=>{
  
  it('can add an element', ()=>{
    testSet1.add(9);
    expect(testSet1.has(9)).toBeTruthy;
  });
  
  it('can remove an element', () => {
    testSet1.add(9);
    expect(testSet1.has(9)).toBeTruthy;
    testSet1.remove(9);
    expect(testSet1.has(9)).toBeFalsy;
  });

  it('can return an intersection of two sets', () => {
    expect(testSet1.intersection(testSet2)).toEqual([5, 6, 7]);
  });

  it('can return a union of two sets', () => {
    expect(testSet1.union(testSet2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can return the difference of two sets', () => {
    expect(testSet1.difference(testSet2)).toEqual([1, 2, 3, 4, 8, 9, 10]);
  });

  it('can return the intersection between two sets', () => {
    expect(Set.intersection(testSet1, testSet2)).toEqual([5, 6, 7]);
  });

  it('can return the union of two sets', () => {
    expect(Set.union(testSet1, testSet2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('can return the difference of two sets', () => {
    expect(Set.difference(testSet1, testSet2)).toEqual([1, 2, 3, 4, 8, 9, 10]);
  });

});
