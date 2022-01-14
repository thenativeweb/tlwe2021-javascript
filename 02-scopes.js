'use strict';

const x = 23;

console.log(x);



const doSomething = function (foo) {
  console.log(foo);
};

doSomething(x);



const doSomethingElse = function () {
  console.log(x);
};

doSomethingElse();

// ----------------------

'use strict';

const foo = function (x) {
  const bar = function (y) {
    console.log(x + y);
  };

  bar(42);
};

foo(23);


// ---------------------

'use strict';

const x = 23;

const doSomething = function () {
  console.log(x); // undefined

  // Achtung: Hoisting! Die Deklaration (also das `var x`) wird an den Anfang
  // der aktuellen Funktion verschoben!
  var x = 42;

  console.log(x); // 42
};

doSomething();
