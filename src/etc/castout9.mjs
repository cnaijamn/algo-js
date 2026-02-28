/**
 * 九去法.
 * @param {number|bigint} n - 整数値
 * @return {bigint} 残りの数
 */
export default function castout9(n) {
  if (!((Number.isInteger(n) || typeof n === 'bigint') && n >= 0)) {
    throw new Error('n must be an integer greater than or equal to zero');
  }
  if (typeof n === 'number') {
    return _by_number(n);
  } else {
    return _by_bignum(n);
  }
}

function _by_number(n) {
  if (!Number.isSafeInteger(n)) {
    throw new RangeError(`n must be an integer less than or equal to ${Number.MAX_SAFE_INTEGER}`);
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

function _by_bignum(n) {
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
