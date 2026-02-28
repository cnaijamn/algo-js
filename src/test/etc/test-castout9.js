import assert from 'node:assert';
import castout9 from '../../etc/castout9.mjs';

assert.equal(castout9(3264), 6);
assert.equal(castout9(8415), 0);
assert.equal(castout9(2946), 3);
assert.equal(castout9(3206), 2);
// Number.MAX_SAFE_INTEGE
assert.equal(castout9(9007199254740991), 4);
// Number.MAX_SAFE_INTEGE + 1
assert.throws(() => castout9(9007199254740992));

assert.equal(castout9(3264n), 6n);
assert.equal(castout9(8415n), 0n);
assert.equal(castout9(2946n), 3n);
assert.equal(castout9(3206n), 2n);
assert.equal(castout9(9007199254740991n), 4n);
assert.equal(castout9(9007199254740992n), 5n);