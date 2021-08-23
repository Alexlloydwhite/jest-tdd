// Insertion sort
const secondLargest = (array) => {
  for (let i = 0; i < array.length; i++) {
    // First element in unsorted array
    let current = array[i];
    // Last element in unsorted array
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array[array.length - 2];
};

// Optimized Solution
// const secondLargest = a => a.sort((a,b)=> b - a)[1];

module.exports = secondLargest;
