import assert from 'node:assert';
import { toHSV, fromHSV } from '../../etc/hsv.mjs';

assert.deepEqual(toHSV([ 255,   0,   0 ]), [  0, 255, 255 ]);
assert.deepEqual(toHSV([ 255, 255, 255 ]), [  0,   0, 255 ]);
assert.deepEqual(toHSV([   0,   0,   0 ]), [  0,   0,   0 ]);
assert.deepEqual(toHSV([ 128,  64,  32 ]), [ 20, 191, 128 ]);

assert.deepEqual(fromHSV([  0, 255, 255 ]), [ 255,   0,   0 ]);
assert.deepEqual(fromHSV([  0,   0, 255 ]), [ 255, 255, 255 ]);
assert.deepEqual(fromHSV([  0,   0,   0 ]), [   0,   0,   0 ]);
assert.deepEqual(fromHSV([ 20, 191, 128 ]), [ 128,  64,  32 ]);
