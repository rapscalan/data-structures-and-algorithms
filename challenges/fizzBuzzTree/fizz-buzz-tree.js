class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const fizzBuzzTree = (aTree)=>{
  let curr = aTree;
  let newNode; //eslint-disable-line no-unused-vars
  if(curr.value % 3 === 0 && curr.value % 5 === 0){
    //create node with fizzbuzz
    newNode = new Node('FizzBuzz');
  } else if(curr.value % 3 === 0){
    //create node with fizz
    newNode = new Node('Fizz');
  } else if(curr.value % 5 === 0){
    //create node with buzz
    newNode = new Node('Buzz');
  }

};

module.exports = fizzBuzzTree;

