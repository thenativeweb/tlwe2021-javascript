'use strict';

class Stack {
  #data;

  constructor () {
    this.#data = [];
  }

  push (value) {
    this.#data.unshift(value);
  }

  top () {
    return this.#data[0];
  }
}

const stack = new Stack();

stack.push(42);
stack.push(23);
console.log(stack.top());
