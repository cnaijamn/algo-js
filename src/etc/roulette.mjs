/*
 * ルーレット選択.
 */
export default function roulette(dat) {
  let sz = dat.reduce((a, c) => a + c.value, 0);
  //console.log("sz:", sz); // 150
  let r = Math.random() * sz;
  //console.log("r:", r); // 

  let acc = 0;
  for (let i of dat) {
    if ((acc <= r) && (r < acc + i.value))
      return i;
    acc += i.value;
  }
  return null; // Error
}