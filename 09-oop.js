'use strict';

const Stack = function () {
  this.data = [];
};

Stack.prototype.push = function (value) {
  this.data.unshift(value);
};

Stack.prototype.top = function () {
  return this.data[0];
};

const stack = new Stack();

stack.push(42);
stack.push(23);
console.log(stack.top());
