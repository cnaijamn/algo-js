const assert = require('assert');
const area = require('../area');

const x = [1,3,2,0], y = [1,2,4,2];
let ret = area(x, y);
assert.equal(ret, 4.5);
