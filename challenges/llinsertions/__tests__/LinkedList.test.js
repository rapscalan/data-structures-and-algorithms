//const { insert, insertBefore, insertAfter, includes, append } = require('../LinkedList');
const LinkedList = require('../LinkedList');
const list = new LinkedList();
list.insert(10);
describe('Linked List functions', () => {
  it('returns true if it includes a value in the list', ()=> {
    expect(list.includes(10)).toEqual(true);
  });
  it('appends a value to the end of the list', ()=>{
    list.append(20);
    expect(list.toString()).toEqual('head->10->20->null');
  });
  it('inserts 15 before 20', ()=> {
    list.insertBefore(20, 15);
    expect(list.toString()).toEqual('head->10->15->20->null');
  });
  it('inserts 12 after 10', ()=>{
    list.insertAfter(10, 12);
    expect(list.toString()).toEqual('head->10->12->15->20->null');
  });
  it('inserts at the head of the list', ()=> {
    list.insert(5);
    expect(list.toString()).toEqual('head->5->10->12->15->20->null');
  });
});
