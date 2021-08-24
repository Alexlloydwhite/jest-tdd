const diagonalDifference = require("./diagonalDifference");

describe("function takes in array and returns diagonal difference", () => {
  it("return type should be a number", () => {
    const result = diagonalDifference([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(typeof result).toBe("number");
  });
});
