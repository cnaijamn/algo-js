/*
 * 幾何分布/2項分布/Poisson分布の乱数.
 */
module.exports = {
  geometric_rnd1,
  geometric_rnd,
  poisson_rnd
};

/**
 * 幾何分布の乱数を発生.
 * @param {number} p - 確率p
 * @return {number} 幾何分布の乱数
 */
function geometric_rnd1(p) {
  var n = 1;
  while (Math.random() > p) ++n;
  return n;
}

/**
 * 幾何分布の乱数を発生(pが小さい場合に高速).
 * @param {number} p - 確率p
 * @return {number} 幾何分布の乱数
 */
function geometric_rnd(p) {
  return Math.ceil(Math.log(1 - Math.random()) / Math.log(1 - p));
}

/**
 * 2項分布の乱数を発生.
 * @param {number} n - n回
 * @param {number} p - 確率p
 * @return {number} 2項分布の乱数
 */
function binomial_rnd(n, p) {
  var i, r = 0;
  for (i = 0; i < n; i++)
    if (Math.random() < p)
      ++r;
  return r;
}

/**
 * Poisson分布の乱数を発生.
 * @param {number} lambda - 平均λ
 * @return {number} 平均λのPosson分布の乱数
 */
function poisson_rnd(lambda) {
  var k = 0;
  lambda = Math.exp(lambda) * Math.random();
  while (lambda > 1) {
    lambda *= Math.random();
    ++k;
  }
  return k;
}
