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
    this.size++;
    return this.head;
  }
  insertBefore(val, newVal){
    let curr = this.head;
    while(curr.next !== null){
      if(curr.next.val === val){
        //insert node;
        const node = new Node(newVal);
        node.next = curr.next;
        curr.next = node;
        this.size++;
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
        this.size++;
        return this.head;
      }
      curr = curr.next;
    }
  }
  append(val){
    if(this.head === null){
      this.head = new Node(val);
      this.size++;
    } else {
      let curr = this.head;
      if(curr != null){
      //let curr = this.head;
        while(curr.next != null){
          curr = curr.next;
        }
      }
      const node = new Node(val);
      node.next = null;
      if(curr === null){
        curr = node;
      } else {
        curr.next = node;
      }
      this.size++;
    }
    return this.head;
  }


  // return this.head;
  //}
  toString(){
    let curr = this.head;
    let str = '';
    while(curr != null){
      str += curr.val + '->';
      curr += curr.next;
    }
    str += 'null';
    return str;
  }
}
module.exports = LinkedList;
