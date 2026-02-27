import assert from 'node:assert';
import castout9 from '../../etc/castout9.mjs';

assert.equal(castout9(3264n), 6n);
assert.equal(castout9(8415n), 0n);
assert.equal(castout9(2946n), 3n);
assert.equal(castout9(3206n), 2n);