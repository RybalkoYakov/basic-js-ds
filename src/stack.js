const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  stack = []

  push( element ) {
    this.stack[this.stack.length] = element
  }

  pop() {
    if (!this.stack.length) return
    let tmp = new Stack()
    let pop

    for (let i = 0; i < this.stack.length - 1; i++) {
      tmp.push(this.stack[i])
    }

    pop = this.peek()
    this.stack = tmp.stack
    return pop
  }

  peek() {
    return this.stack[this.stack.length - 1]
  }
}

module.exports = {
  Stack
};
