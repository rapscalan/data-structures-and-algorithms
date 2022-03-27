const Stack = require('./Stack');

const multiBracketValidation = (str) => {
  const stack = new Stack();
  const openers = '[{(';
  const closers = ']})';
  for(let i = 0; i < str.length; i++){
    const char = str.charAt(i);
    let isOpener = openers.includes(char);
    let isCloser = closers.includes(char);
    if(isOpener){
      stack.push(char);
    } else if(isCloser){
      const matchedOpener = char === ')' ? '(' : char === ']' ?
        '[' : char === '}' ? '{' : null;

      if(matchedOpener !== stack.pop()){
        return false;
      } 
    }
  }
  return !stack.top;
};
module.exports = multiBracketValidation;
