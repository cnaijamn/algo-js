/*
 * 黄金分割法 golden section search.
 */
export { goldsect as default };

/**
 * 黄金分割法.
 * @param {number} a 区間の下限
 * @param {number} b 区間の上限
 * @param {number} tolerance 許容誤差
 * @param {Function} f 関数
 */
function goldsect(a, b, tolerance, f) {
  let r = 2 / (3 + Math.sqrt(5));
  let c, d, fc, fd, t;

  if (a > b) {
    t = a;
    a = b;
    b = t;
  }
  t = r * (b - a);
  c = a + t;
  d = b - t;
  fc = f(c);
  fd = f(d);

  for (; ;) {
    if (fc > fd) {
      a = c;
      c = d;
      fc = fd;
      d = b - r * (b - a);
      if (d - c <= tolerance)
        return c;
      fd = f(d);
    } else {
      b = d;
      d = c;
      fd = fc;
      c = a + r * (b - a);
      if (d - c <= tolerance)
        return d;
      fc = f(c);
    }
  }
}
