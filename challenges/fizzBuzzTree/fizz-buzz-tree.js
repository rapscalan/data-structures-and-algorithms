class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const fizzBuzzTree = (aTree)=>{
  let curr = aTree;
  if(curr.value % 3 === 0 && curr.value % 5 === 0){
    //create node with fizzbuzz
  }else if(curr.value % 3 === 0){
    //create node with fizz
  }else if(curr.value % 5 === 0){
    //create node with buzz
  }

}