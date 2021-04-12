/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
// eslint-disable-next-line consistent-return
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((0 + 1) / 2);
  for (let i = 0; i < array.length; i++) {
    if (array[middle] === value) {
      return middle;
    }
    if (middle !== value) {
      if (value < array[middle]) { end = middle; } else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
  }
}

module.exports = findIndex;
