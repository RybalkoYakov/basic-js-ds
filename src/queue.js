const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  get rootNode() {
    return this.#rootNode;
  }

  #rootNode = null

  getUnderlyingList() {
    return this.#rootNode
  }

  enqueue( value ) {
    if (!this.#rootNode) {
      this.#rootNode = new ListNode(value)
      return
    }

    let currentNode = this.#rootNode
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = new ListNode(value)
  }

  dequeue() {
    let tmp = this.rootNode.value;
    this.#rootNode = this.#rootNode.next
    return tmp
  }
}

module.exports = {
  Queue
};
