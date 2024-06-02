/* 
This function counts the sheep represented by the array elements that are true.
*/
function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i <= sheep.length; i++) {
    if (sheep[i]) {
      count++;
    }
  }
  /* console.log(count); */
  return count;
}

/* test: */

/*  [[], 0]
  [[undefined], 0]
  [[null], 0]
  [[false], 0]
  [[true], 1]
  [[undefined, null, false, true], 1]
  [[undefined, null, false, true, true, false, null, undefined], 2]
 */
countSheeps([false, 1, true]);
