/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {
  let n = num;
  let sum = 0;
  n = String(n).split('').map((k) => Number(k));
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  let result = 0;
  if (String(sum).length > 1) {
    sum = String(sum).split('').map((k) => Number(k));
    for (let j = 0; j < sum.length; j++) {
      result += sum[j];
    }
    return result;
  }
  return sum;
}

module.exports = getSumOfDigits;
