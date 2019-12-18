import { isModuleDeclaration } from "@babel/types";

class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}
class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    const node = new Node(value, this.top);
    this.top = node;
  }
  pop(){
    if(!this.top) return null;

    const top = this.top;
    this.top = top.next;
    return top;
  }
  peek(){
    if(!this.top) return null;
    return this.top.value;
  }
  isEmpty(){
    return !this.top;
  }
}

class PsuedoQueue{
  constructor(){
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }
  enqueue(value){
    if(this.dequeueStack.peek() !== null){
      while(this.dequeueStack.peek() !== null){
        this.enqueueStack.push(this.dequeueStack.pop());
      }
    }
    this.enqueueStack.push(value);
  }
  dequeue(){
    if(this.enqueueStack.peek() !== null){
      while(this.enqueueStack.peek() !== null){
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    return this.dequeueStack.pop();
  }
}
module.exports = PsuedoQueue;
