import assert from 'node:assert';
import castout9 from '../../etc/castout9.mjs';

assert.equal(castout9(3264), 6)
assert.equal(castout9(8415), 0);
assert.equal(castout9(2946), 3);
assert.equal(castout9(3206), 2);
