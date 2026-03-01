import assert from 'node:assert';
import randarr from '../../etc/randarr.mjs';

const arr = ['a','b','c','d','e'];
let ret = randarr(arr);
let x = null;
for (let i = 0; i < arr.length; i++) {
  if (ret === arr[i]) {
    x = ret;
    //console.log(x);
    break;
  }
}
assert.ok(x !== null);