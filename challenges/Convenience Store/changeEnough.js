const changeEnough = (change, amountDue) => {
  let totalChange =
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;

  return totalChange >= amountDue;
};

module.exports = changeEnough;
