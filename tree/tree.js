class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }

  inOrder(curr, results){
    if(!curr){
      return;
    }
    this.inOrder(curr.left);
    results.push(curr.value);
    this.inOrder(curr.right);
  }

  preOrder(curr, results){
    if(!curr){
      return;
    }
    results.push(curr.value);
    this.preOrder(curr.left);
    this.preOrder(curr.right);
  }

  postOrder(curr, results){
    if(!curr){
      return;
    }
    this.postOrder(curr.left);
    this.postOrder(curr.right);
    results.push(curr.value);
  }
}

class BinarySearchTree extends BinaryTree{
  constructor(){
    super();
  }

  add(curr, value){
    if(!curr){
      this.curr = new Node(value);
    } else if(value > curr.value)
    {
      curr = this.add(curr.right, value);
    } else if(value < curr.value){
      curr = this.add(curr.left, value);
    }
    return curr;
  }

  contains(curr, value){
    if(!curr){
      return false;
    }
    if(curr.value === value){
      return true;
    } else if(curr.value < value){
      return this.contains(curr.right, value);
    } else if(curr.value > value){
      return this.contains(curr.left, value);
    }
  }
}
module.exports = BinarySearchTree;

