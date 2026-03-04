import assert from 'node:assert';
import fivenum from '../5num.mjs';

const x = [80,45,90,60,65,75,70,50,95];
const ret = fivenum(x);
assert.equal(ret[0], 45);
assert.equal(ret[1], 60);
assert.equal(ret[2], 70);
assert.equal(ret[3], 80);
assert.equal(ret[4], 95);
