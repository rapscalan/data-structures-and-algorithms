const PsuedoQueue = require('../queue-with-stacks');
let queue;
beforeAll(()=> {
  queue = new PsuedoQueue();
  //queue.enqueue(25);
});
describe('PsuedoQueue', () => {
  it('can enqueue items', ()=> {
    queue.enqueue(25);
    expect(queue.dequeue()).toEqual(25);
  });
  it('can enqueue')
});
