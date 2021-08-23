const checkTrue = (array) => {
  let trueCount = 0;
  array.map((index) => index === true && trueCount++);
  return trueCount;
};

module.exports = checkTrue;