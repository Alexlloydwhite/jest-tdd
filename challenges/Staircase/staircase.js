/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - 1 - i), "#".repeat(i + 1));
  }
}
