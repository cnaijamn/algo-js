/*
 * 2次元の探索 searching in tow dimension.
 */
module.exports = srchmat;

/**
 * 2次元の探索.
 * @param {number[][]} a - 行・列の両方向に昇順に整列された2次元配列
 * @param {number} x - 探索対象
 * @return {number[]} xに等しいものの位置(i,j). 見つからなかった場合, null
 */
function srchmat(a, x) {
  var imin = 0, jmin = 0;
  var imax = a.length - 1, jmax = a[0].length - 1;
  var i = imax, j = jmin;
  while (a[i][j] !== x) {
    if (a[i][j] < x)
      ++j;
    else
      --i;
    if (i < imin || j > jmax)
      return null;
  }
  return [i, j];
}
