const changeEnough = (change, amountDue) => {
  let quarters = change[0] * 0.25;
  let dimes = change[1] * 0.1;
  let nickels = change[2] * 0.05;
  let pennies = change[3] * 0.01;

  let totalChange = quarters + dimes + nickels + pennies;

  if (totalChange >= amountDue) {
    return true;
  } else {
    return false;
  }
  
};

module.exports = changeEnough;
