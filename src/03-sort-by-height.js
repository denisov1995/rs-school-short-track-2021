/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = [...arr];
  const res = arr.filter((n) => n !== -1);
  const a = res.sort((g, b) => g - b);
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] === -1) {
      a.splice(j, 0, arr2[j]);
    }
  }
  // eslint-disable-next-line eqeqeq
  const result = a.filter((n) => n != undefined);
  return result;
}

module.exports = sortByHeight;
