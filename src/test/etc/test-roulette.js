import assert from 'node:assert';
import roulette from '../../etc/roulette.mjs';

const dat = [
  { name: 'a', value:  3 },
  { name: 'b', value: 10 },
  { name: 'c', value: 30 },
  { name: 'd', value: 13 },
  { name: 'e', value: 70 },
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