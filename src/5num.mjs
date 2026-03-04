/*
 * 五数要約 five-number summary.
 */
export { fivenum as default };

/**
 * 五数要約.
 * @param {number[]} x - 数値配列
 * @return {number[]} 五数要約([0]:最小値, [1]:第1四分位数, [2]:中央値, [3]:第3四分位数, [4]:最大値)
 */
function fivenum(x) {
  let x = [].concat(x); // clone
  let n = x.length;
  let j, t;
  let summary = [];
  x.sort((k1, k2) => k1 - k2);
  for (let i = 0; i < 4; i++) {
    t = (n - 1) * i / 4.0;
    j = parseInt(t);
    summary.push(x[j] + (x[j + 1] - x[j]) * (t - j));
  }
  summary.push(x[n - 1]);
  return summary;
}
