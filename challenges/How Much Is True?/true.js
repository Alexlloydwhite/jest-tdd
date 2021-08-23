const checkTrue = (array) => {
  let trueCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      trueCount++;
    }
  }
  return trueCount;
};

module.exports = checkTrue;