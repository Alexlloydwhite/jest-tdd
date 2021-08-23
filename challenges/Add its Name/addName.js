const addName = (obj, name, value) => {
  return { ...obj, [name]: value };
};

module.exports = addName;
