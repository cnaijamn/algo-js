/*
 * 選択ソート selection sort.
 */
module.exports = selectsort;

/**
 * 選択ソート
 * @param {number[]} a - 数値配列
 * @return {number[]} ソート結果
 */
function selectsort(a) {
  var a = [].concat(a); // clone
  var n = a.length;
  var k;
  var min;
  for (var i = 0; i < n - 1; i++) {
    min = a[i];
    k = i;
    for (var j = i + 1; j < n; j++)
      if (a[j] < min) {
        min = a[j];
        k = j;
      }
    a[k] = a[i];
    a[i] = min;
  }
  return a;
}
