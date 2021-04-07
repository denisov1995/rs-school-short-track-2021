/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = 0;
  const { length } = arr[0];
  const newArr = arr.join(',').split(',').map((n) => Number(n));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 0 && i < newArr.length - length) {
      newArr[i + length] = 0;
    }
  }
  for (let k = 0; k < newArr.length; k++) {
    sum += newArr[k];
  }
  return sum;
}

module.exports = getMatrixElementsSum;
