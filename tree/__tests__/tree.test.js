const BinarySearchTree = require('../tree');
let tree;
beforeAll(()=>{
  tree = new BinarySearchTree();
  [10, 1, 2, 4, 5, 12, 14, 9].forEach(el => tree.add(el));
});

describe('binary search tree', () => {
  it('can instantiate an empty tree', () => {
    expect(new BinarySearchTree()).toEqual(expect.any(Object));
  });
  it('can instantiate a tree with a single node', () => {
    expect(new BinarySearchTree(5)).toEqual(expect.any(Object));
  });
  it('can successfully add a left child and a right child to a single node', ()=>{
    expect(true).toBeTruthy;
  });
  it('successfully returns a collection from an inorder traversal', ()=>{
    expect(tree.inOrder(tree.left)).toEqual([1, 2, 3]);
  });
  it('successfully returns a collection from an preorder traversal', ()=>{
    expect(tree.preOrder(tree.left)).toEqual([1, 2, 3]);
  });
  it('successfully returns a collection from an postorder traversal', ()=>{
    expect(tree.postOrder(tree.left)).toEqual([1, 2, 3]);
  });
});
