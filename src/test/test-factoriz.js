const assert = require('assert');
const factorize = require('../factoriz');

assert.deepEqual(factorize(0), [0]);
assert.deepEqual(factorize(1), [1]);
assert.deepEqual(factorize(2), [2]);
assert.deepEqual(factorize(3), [3]);
assert.deepEqual(factorize(4), [2,2]);
assert.deepEqual(factorize(10), [2,5]);
assert.deepEqual(factorize(32), [2,2,2,2,2]);
