const addName = (obj, name, value) => {
  let newObj = {
    ...obj,
    [name]: value,
  };
  return newObj;
};

module.exports = addName;
