const assert = require('assert');
const goldsect = require('../goldsect');

const func = (() => {
  let count = 0;

  return (x) => {
    let xmin = 0.314;
    let value = (x - xmin) * (x - xmin);
    //console.log(++count + ': ' + x + ' = ' + value);
    return value;
  };
})();

let x = goldsect(0, 1, 1e-6, func);
assert(parseInt(x * 1000) / 1000, 0.314);
