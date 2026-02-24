/*
 * 最大公約数 greatest common divisor.
 * Euclidの互除法で最大公約数を求める.
 */
module.exports = {
  gcd,
  gcd_nr,
  ngcd
};

/**
 * 最大公約数.
 * @param {number} x - 整数x
 * @param {number} y - 整数y
 * @return {number} xとyの最大公約数
 */
function gcd(x, y) {
  if (y == 0)
    return x;
  else
    return gcd(y, x % y);
}

/**
 * 最大公約数(非再帰版).
 * @param {number} x - 整数x
 * @param {number} y - 整数y
 * @return {number} xとyの最大公約数
 */
function gcd_nr(x, y) {
  var t;
  while (y != 0) {
    t = x % y;
    x = y;
    y = t;
  }
  return x;
}

/**
 * 最大公約数(配列版).
 * @param {number[]} a - 整数配列
 * @return {number} aの最大公約数
 */
function ngcd(a) {
  var n = a.length;
  var d = a[0];
  for (var i = 1; i < n && d != 1; i++)
    d = gcd_nr(a[i], d);
  return d;
}
