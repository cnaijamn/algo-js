/*
 * 配列のランダム値.
 */
export default function randarr(arr) {
  let r = Math.floor(Math.random() * arr.length);
  return arr[r];
}