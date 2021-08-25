const miniMaxSum = require("./miniMaxSum");

describe("function takes in array of numbers and min / max sum", () => {
  it("should return a number", () => {
    let result = miniMaxSum([1, 3, 5, 7, 9]);
    expect(typeof result).toBe("number");
  });
});
