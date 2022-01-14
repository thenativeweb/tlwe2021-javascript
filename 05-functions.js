// Function expressions
const add = function (x, y) {
  return x + y;
};

const sum = add(23, 42);


// Function expressions in kurz, aka Lambda expressions
const add = (x, y) => {
  return x + y;
};
const add = (x, y) => x + y;
const double = x => x + x;
const id = x => x;



// Function statements
function subtract (x, y) {
  return x - y;
}

const difference = subtract(23, 42);
