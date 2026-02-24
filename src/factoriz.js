/*
 * 素因数分解 factorization into primes.
 */
module.exports = fatorize;

/**
 * 素因数分解.
 * @param {number} x - 整数
 * @return {number[]} 素因数の配列
 */
function fatorize(x) {
  if (!Number.isInteger(x))
    throw new TypeError('x must be integer type');
  var d = 3, result = [];
  while (x >= 4 && x % 2 === 0) {
    result.push(2);
    x /= 2;
  }
  var q = x / d;
  while (q >= d) {
    if (x % d === 0) {
      result.push(d);
      x = q;
    } else
      d += 2;
    q = x / d;
  }
  result.push(x);
  return result;
}
