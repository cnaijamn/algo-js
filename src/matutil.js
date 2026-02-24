module.exports = {
  innerproduct
};

function innerproduct(u, v) {
  var n = u.length;
  var n5 = n % 5;
  var s = 0.0;
  var i;
  if (n !== v.length)
    throw new RangeError('Lengths of u and v are different');
  for (i = 0; i < n5; i++)
    s += u[i] * v[i];
  for (i = n5; i < n; i += 5)
    s += u[i]*v[i] + u[i+1]*v[i+1] + u[i+2]*v[i+2]
                   + u[i+3]*v[i+3] + u[i+4]*v[i+4];
  return s;
}
