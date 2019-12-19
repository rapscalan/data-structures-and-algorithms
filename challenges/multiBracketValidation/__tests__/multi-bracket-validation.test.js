const multiBracketValidation = require('../multi-bracket-validation');

describe('It tests whether a string has matching brackets', () => {
  it('should return true for correctly formed brackets', () => {
    expect(multiBracketValidation('[[]]')).toEqual(true);
  });
  it('should return false for incorrectly formed brackets', () => {
    expect(multiBracketValidation('[[')).toEqual(false);
  });
  it('should return false for incorrectly formed braces', () => {
    expect(multiBracketValidation('{[()()]}()')).toEqual(true);
  });
  it('should return true for brackets with characters', () => {
    expect(multiBracketValidation('{(asbd)}[abd]')).toEqual(true);
  });
});
