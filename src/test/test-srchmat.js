const assert = require('assert');
const srchmat = require('../srchmat');

const a = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];
const ret = srchmat(a, 10);
assert.equal(ret[0], 1);
assert.equal(ret[1], 4);
