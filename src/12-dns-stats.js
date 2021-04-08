/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newDomains = [...domains];
  for (let i = 0; i < newDomains.length; i++) {
    newDomains[i] = newDomains[i].split('.').reverse().map((n) => `.${n}`).join('')
      .split();
  }
  newDomains = newDomains.map((n) => n.join('').split('.'));
  for (let j = 0; j < newDomains.length; j++) {
    for (let k = 1; k < newDomains[j].length; k++) {
      newDomains[j][k] = `${newDomains[j][k - 1]}.${newDomains[j][k]}`;
    }
  }
  newDomains = newDomains.map((n) => n.filter((m) => m !== '')).join(',').split(',');
  let result = {};
  for (let i = 0; i < newDomains.length; ++i) {
    const a = newDomains[i];
    if (result[a] !== undefined) ++result[a];
    else result[a] = 1;
  }
  if (result['']) {
    result = {};
  }
  return result;
}

module.exports = getDNSStats;
