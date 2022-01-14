// 1. number (= double, IEEE 754)
x = 42;
x = 3.14;

x = 42 / 0;    // => Infinity
x = 42 / -0;   // => -Infinity
x = 0.1 + 0.2; // => *nicht* 0.3

x = 0xff_a7_de_5c_ab_37;
x = 0o123;
x = 0b1100_1011;

x = 10_000_000_000_000;

x = Number.MAX_VALUE;
x = Number.MAX_SAFE_INTEGER;

x = 123437564837645834658436858734658764387n; // BigInt


// 2. string
x = '';
x = 'a';
x = 'abc';
x = "abc";
x = `abc`;
protocol = 'https';
x = `the native web GmbH
     ${protocol}://www.thenativeweb.io`;


// 3. boolean
x = true;
x = false;


// 4. undefined
x = undefined;


// 5. function
x = function () {
  // ...
};


// 6. object
var person = {
  firstName: "Donald",
  lastName: "Duck",
  getFullName: function () {
    return "Donald Duck";
  }
};

console.log(person.FirstName); // => undefined
person.FirstName = 'Dagobert';
console.log(person.FirstName); // => Dagobert

var person = null;


// 7. null (=> object)
x = null;


// 8. Symbol
x = Symbol('foo');
y = Symbol('foo');
// x und y sind nicht identisch!


// Variablen
'use strict';

x = 'foo';          // => globale Variable
var x = 'foo';      // => lokale Variable, nicht mehr verwenden!
let x = 'foo';      // => lokale Variable
const x = 'foo';    // => lokale Konstante

// => const > let > var
