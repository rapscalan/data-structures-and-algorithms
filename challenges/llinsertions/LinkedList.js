const Node = require('./Node');
class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  includes(val){
    let curr = this.head;
    while(curr !== null){
      if(curr.val === val){
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
  insert(val){
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
  }
  insertBefore(val, newVal){
    let curr = this.head;
    while(curr.next !== null){
      if(curr.next.val === val){
        //insert node;
        const node = new Node(newVal);
        node.next = curr.next;
        curr.next = node;
        return this.head;
      }
      curr = curr.next;
    }
  }
  insertAfter(val, newVal){
    let curr = this.head;
    while(curr != null){
      if(curr.val === val){
        const node = new Node(newVal);
        node.next = curr.next;
        curr.next = node;
        return this.head;
      }
      curr = curr.next;
    }
  }
  append(val){
    let curr = this.head;
    while(curr.next != null){
      curr = curr.next;
    }
    const node = new Node(val);
    curr.next = node;
    return this.head;
  }
}
module.exports = LinkedList;
