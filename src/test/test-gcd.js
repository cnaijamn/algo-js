const assert = require('assert');
const gcd = require('../gcd');

assert.equal(gcd.gcd(18, 24), 6);
assert.equal(gcd.gcd_nr(18, 24), 6);
assert.equal(gcd.ngcd([18,24,36]), 6);
