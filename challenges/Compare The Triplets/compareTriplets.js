/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let results = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      results[0]++;
    } else if (a[i] < b[i]) {
      results[1]++;
    }
  }

  return results;
}

module.exports = compareTriplets;
