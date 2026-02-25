/*
 * 九九.
 */
export default function kuku() {
  const row = [];
  for (let i = 2; i <= 9; i++) {
    const col = [];
    for (let j = 1; j <= 9; j++) {
      col.push(i * j);
    }
    row.push(col);
  }
  return row;
}