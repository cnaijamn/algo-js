import assert from 'node:assert';
import roulette from '../../etc/roulette.mjs';

const dat = [
  { name: 'a', value: 10 },
  { name: 'b', value: 20 },
  { name: 'c', value: 30 },
  { name: 'd', value: 70 },
  { name: 'e', value: 40 },
];
let ret = roulette(dat);
let x = null;
for (let i of dat) {
  if (ret === i) {
    x = ret;
    //console.log(x);
    break;
  }
}
assert.ok(x !== null);

const N = 1000000;
const A = new Float64Array(dat.length);
for (let i = 0; i < N; i++) {
  const ret = roulette(dat);
  const idx = dat.findIndex(e => e.name === ret.name);
  ++A[idx];
}
let x1 = A[0] / dat[0].value;
console.log(A.map(e => e / x1));