const sevenBoom = (array) => {
  let stringArray = array.toString();
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < stringArray[i].length; j++) {
      if (stringArray[i][j] === "7") {
        return "Boom!";
      }
    }
  }
  return "there is no 7 in the array";
};

module.exports = sevenBoom;
