'use strict';

const { setTimeout } = require('timers/promises');

const main = async function () {
  console.log('Anfang');

  await setTimeout(2_000);
  console.log('Hallo Welt!');

  await setTimeout(2_000);
  console.log('Hallo Welt!');

  console.log('Ende');
};

main();
