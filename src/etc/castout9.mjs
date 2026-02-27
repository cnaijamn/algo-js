/**
 * 九去法.
 * @param {bigint} n - 数値
 * @return {bigint} 残りの数
 */
export default function castout9(n) {
  if (typeof n !== "bigint") {
    throw new TypeError('n must be bigint greater than or equal to zero');
  }
  if (n < 0n) {
    throw new RangeError('n must be bigint greater than or equal to zero');
  }
  while (n >= 9n) {
    let x = n;
    let sum = 0n;
    while (x > 0n) {
      let c = x % 10n;
      x = x / 10n;
      if (c == 9n || c == 0n) continue;
      sum += c;
    }
    n = sum;
  }
  return n;
}