/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newN = String(n).split('').map((k) => Number(k));
  const result = [...newN];
  result.sort();
  for (let i = 0; i < newN.length; i++) {
    if (newN[i] === result[0]) {
      delete newN[i];
      break;
    }
  }
  return Number(newN.filter((k) => k !== undefined).join(''));
}

module.exports = deleteDigit;
