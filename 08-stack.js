'use strict';

const createStack = function () {
  let data = [];

  return {
    push: function (value) {
      data.unshift(value);
    },

    top: function () {
      return data[0];
    }
  };
};

const stack = createStack();

stack.push(42);
stack.push(23);
console.log(stack.top());
