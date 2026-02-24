const assert = require('assert');
const viterbi = require('../etc/viterbi');

// https://en.wikipedia.org/wiki/Viterbi_algorithm
{
  let obs = ['normal', 'cold', 'dizzy'];
  let states = ['Healthy', 'Fever'];
  let start_p = {Healthy: 0.6, Fever: 0.4};
  let trans_p = {
    Healthy : {Healthy: 0.7, Fever: 0.3},
    Fever : {Healthy: 0.4, Fever: 0.6}
  }
  let emit_p = {
    Healthy : {normal: 0.5, cold: 0.4, dizzy: 0.1},
    Fever : {normal: 0.1, cold: 0.3, dizzy: 0.6}
  }
  let X = viterbi(obs, states, start_p, trans_p, emit_p);
  assert.deepEqual(X.path, [ 'Healthy', 'Healthy', 'Fever' ]);

  /*
             0            1            2
  Healthy: 0.30000 0.08400 0.00588
  Fever: 0.04000 0.02700 0.01512
  The steps of states are Healthy Healthy Fever with highest probability of 0.01512

  X.prob :
  [ { Healthy: { prob: 0.3, prev: null },
      Fever: { prob: 0.04000000000000001, prev: null } },
    { Healthy: { prob: 0.084, prev: 'Healthy' },
      Fever: { prob: 0.027, prev: 'Healthy' } },
    { Healthy: { prob: 0.00588, prev: 'Healthy' },
      Fever: { prob: 0.01512, prev: 'Healthy' } } ]
  X.path :
  [ 'Healthy', 'Healthy', 'Fever' ]
  */
}

// https://ja.wikipedia.org/wiki/ビタビアルゴリズム
{
  let obs = ['walk', 'shop', 'clean'];
  let states = ['Rainy', 'Sunny'];
  let start_p = {Rainy: 0.6, Sunny: 0.4};
  let trans_p = {
    Rainy: {Rainy: 0.7, Sunny: 0.3},
    Sunny: {Rainy: 0.4, Sunny: 0.6}
  };
  let emit_p = {
    Rainy: {walk: 0.1, shop: 0.4, clean: 0.5},
    Sunny: {walk: 0.6, shop: 0.3, clean: 0.1}
  };
  let X = viterbi(obs, states, start_p, trans_p, emit_p);
  assert.deepEqual(X.path, [ 'Sunny', 'Rainy', 'Rainy' ]);

  /*
           0            1            2
  Rainy: 0.06000 0.03840 0.01344
  Sunny: 0.24000 0.04320 0.00259
  The steps of states are Sunny Rainy Rainy with highest probability of 0.01344
   */
}
