/**
 * 九去法.
 * @param {number} n - 数値
 * @return {number} 残りの数
 */
export default function castout9(n) {
  if (!(Number.isInteger(n) && n >= 0)) {
    throw new RangeError('n must be integer greater than or equal to zero');
  }
  while (n >= 9) {
    let x = n;
    let sum = 0;
    while (x > 0) {
      let c = x % 10;
      x = Math.trunc(x / 10);
      if (c == 9 || c == 0) continue;
      sum += c;
    }
    n = sum;
  }
  return n;
}
