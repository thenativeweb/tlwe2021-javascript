'use strict';

console.log('Anfang');

setTimeout(() => {
  console.log('Hallo Welt!');

  setTimeout(() => {
    console.log('Hallo Welt!');
  }, 2_000);
}, 2_000);

console.log('Ende');

// for (let i = 0; i < 10_000_000_000; i++) {}
