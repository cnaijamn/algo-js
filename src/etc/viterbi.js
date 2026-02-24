/*
 * ビタビアルゴリズム Viterbi algorithm.
 * https://en.wikipedia.org/wiki/Viterbi_algorithm
 * https://ja.wikipedia.org/wiki/ビタビアルゴリズム
 */
module.exports = viterbi;

function* dptable(V) {
  yield Array.from({length: V.length}, (v, i) => ('' + i).padStart(12)).join(' ');
  for (let state in V[0])
    yield state.substr(0, 7) + ': ' + V.map(v => v[state].prob.toPrecision(7).substr(0, 7)).join(' ');
}

function viterbi(obs, states, start_p, trans_p, emit_p) {
  let V = [{}];
  for (let st of states)
    V[0][st] = {prob: start_p[st] * emit_p[st][obs[0]], prev: null};
  // Run Viterbi when t > 0
  for (let t = 1; t < obs.length; t++) {
    V.push({});
    for (let st of states) {
      let max_tr_prob = V[t - 1][states[0]].prob * trans_p[states[0]][st];
      let prev_st_selected = states[0];
      for (let prev_st of states.slice(1)) {
        let tr_prob = V[t - 1][prev_st].prob * trans_p[prev_st][st];
        if (tr_prob > max_tr_prob) {
          max_tr_prob = tr_prob;
          prev_st_selected = prev_st;
        }
      }
      let max_prob = max_tr_prob * emit_p[st][obs[t]];
      V[t][st] = {prob: max_prob, prev: prev_st_selected}
    }
  }
  for (let line of dptable(V))
    console.log(line);
  let opt = [];
  // The highest probability
  let max_prob = Object.values(V[V.length - 1]).reduce((a, b) => Math.max(a.prob, b.prob));
  let previous = null;
  // Get most probable state and its backtrack
  for (let [st, data] of Object.entries(V[V.length - 1])) {
    if (data.prob === max_prob) {
      opt.push(st);
      previous = st;
      break;
    }
  }
  // Follow the backtrack till the first observation
  for (let t = V.length - 2; t >= 0; t--) {
    opt.unshift(V[t + 1][previous].prev);
    previous = V[t + 1][previous].prev;
  }

  console.log('The steps of states are ' + opt.join(' ') + ' with highest probability of ' + max_prob);
  return {prob: V, path: opt};
};
