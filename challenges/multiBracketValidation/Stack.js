const Node = require('./Node');
class Stack{
  constructor(){
    this.top = null;
  }

  isEmpty(){
    return this.top === null;
  }

  push(val){
    const node = new Node(val, this.top);
    this.top = node;
  }

  peek(){
    if(this.top !== null)
      return this.top.val;
    return this.top;
  }

  pop(){
    if(!this.isEmpty()){
      const popped = this.top.val;
      this.top = this.top.next;
      return popped;
    }
    return null;
  }
}
module.exports = Stack;
