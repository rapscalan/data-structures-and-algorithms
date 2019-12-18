const PseudoQueue = require('../queue-with-stacks');
let queue;
beforeEach(()=> {
  queue = new PseudoQueue();
});
describe('PseudoQueue', () => {
  it('can enqueue items', ()=> {
    queue.enqueue(25);
    expect(queue.dequeue()).toEqual(25);
  });
  it('returns the first element in the queue after several items enqueued', ()=> {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(1);
  });
  it('puts an item at the end of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    queue.enqueue(6);
    expect(queue.dequeue()).toEqual(2);
  
  });
});
