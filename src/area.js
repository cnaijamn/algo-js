/*
 * 面積 area.
 */
module.exports = area;

/**
 * 面積.
 * @param {number[]} x - 領域構成点のx座標配列
 * @param {number[]} y - 領域領域点のy座標配列
 * @return {number} 面積
 * @throws {RangeError} xとyの長さが異なるとき
 */
function area(x, y) {
  var n = x.length;
  if (n !== y.length)
    throw new RangeError('Lengths of x and y are different');
  var a = x[n - 1] * y[0] - x[0] * y[n - 1];
  for (var i = 1; i < n; i++)
    a += x[i - 1] * y[i] - x[i] * y[i - 1];
  return 0.5 * a;
}
