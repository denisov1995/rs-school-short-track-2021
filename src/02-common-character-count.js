/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newStr1 = s1;
  let newStr2 = s2;
  if (s1.length >= s2.length) {
    for (let i = 0; i < newStr2.length; i++) {
      newStr1 = newStr1.replace(newStr2[i], '');
    }
    return s1.length - newStr1.length;
  }
  for (let i = 0; i < newStr1.length; i++) {
    newStr2 = newStr2.replace(newStr1[i], '');
  }
  return s2.length - newStr2.length;
}

module.exports = getCommonCharacterCount;
