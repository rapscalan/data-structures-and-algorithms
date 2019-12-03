const { arrayReverse, arrayReverse2, arrayReverse3 } = require('../array-reverse');

describe('array reverse', ()=> {
    it('reverses an array', () => {
        expect(arrayReverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
        expect(arrayReverse([])).toEqual([]);
        expect(arrayReverse([1])).toEqual([1]);
        expect(arrayReverse([1, 1, 1, 2, 3, 1, 1, 1])).toEqual([1, 1, 1, 3, 2, 1, 1, 1]);
    });
    it('reverses an array with foreach', () => {
        expect(arrayReverse2([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
        expect(arrayReverse2([])).toEqual([]);
        expect(arrayReverse2([1])).toEqual([1]);
        expect(arrayReverse2([1, 1, 1, 2, 3, 1, 1, 1])).toEqual([1, 1, 1, 3, 2, 1, 1, 1]);
    });
    it('reverses an array with unshift', () => {
        expect(arrayReverse3([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
        expect(arrayReverse3([])).toEqual([]);
        expect(arrayReverse3([1])).toEqual([1]);
        expect(arrayReverse3([1, 1, 1, 2, 3, 1, 1, 1])).toEqual([1, 1, 1, 3, 2, 1, 1, 1]);
    });
    
});
