/*
 * ライプニッツの公式 Leibniz formula for π.
 */
export { leibniz as default };

/**
 * ライプニッツの公式.
 * @return {number} π/4
 */
function leibniz(n = 1000000) {
  let s = 0;
  let sign = 1;
  for (let i = 0; i < n; i++) {
    s += sign / (2 * i + 1);
    sign = -sign;
  }
  return s;
}