const arrayOfMultiples = (num, length) => {
  let array = [];
  for (let i = 1; i <= length; i++) {
    array.push(num * i);
  }
  return array;
};

module.exports = arrayOfMultiples;
