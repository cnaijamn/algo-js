/*
 * Eratosthenes(エラトステネス)のふるい sieve of Eratosthenes.
 */
module.exports = sieve1;

function sieve1() {
  var N = 8190; // 2*N+3=16383まで調べる
  var flag = new Uint8Array(N + 1); // flag[i]は2i+3が素数なら1
  var p;
  var primes = [2];
  for (var i = 0; i <= N; i++) flag[i] = 1;
  for (var i = 0; i <= N; i++)
    if (flag[i]) {
      p = i + i + 3;
      primes.push(p);
      for (var k = i + p; k <= N; k += p)
        flag[k] = 0;
    }
  return primes;
}
