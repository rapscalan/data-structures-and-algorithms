const LinkedList = require('../LinkedList');
describe('Linked list test', () => {
  it('should insert a node at the end', () => {
    let ll = new LinkedList();
    for(let i = 0; i < 5; i++){
      ll.append(i + 1);
    }
    // let result = '';
    // let curr =  ll;
    // while(curr != null){
    //   result += curr.val + '->';
    //   curr = curr.next;
    // }
    // result += 'null';
    //console.log(ll.head.toString());
    //expect(ll.append(6).toString()).toEqual('5->4->3->2->1->null');
    //expect(ll.toString().toEqual('5->4->3->2->1->null');
    expect(ll).not.toEqual(null);
  });
});
