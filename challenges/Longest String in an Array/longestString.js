const longestString = (array) => {
  let longestLength = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestLength.length) {
      longestLength = array[i];
    }
  }

  return longestLength;
};

module.exports = longestString;