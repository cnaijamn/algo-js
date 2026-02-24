/*
 * ‰©‹à•ªŠ„–@ golden section search.
 */
module.exports = goldsect;

/**
 * ‰©‹à•ªŠ„–@.
 * @param {number} a ‹æŠÔ‰ºŒÀ
 * @param {number} b ‹æŠÔãŒÀ
 * @param {number} tolerance ‹–—eŒë·
 * @param {Function} f ŠÖ”
 */
function goldsect(a, b, tolerance, f) {
  var r = 2 / (3 + Math.sqrt(5));
  var c, d, fc, fd, t;

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

  for ( ; ; ) {
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
