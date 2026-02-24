const assert = require('assert');
const selectsort = require('../slctsort');

const N = 20;
const a = new Array(N);

for (let i = 0; i < N; i++)
  a[i] = Math.trunc(Math.random() * 100);

const ret = selectsort(a);

assert.deepEqual(ret, a.sort((a,b) => a - b));
