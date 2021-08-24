const diagonalDifference = require("./diagonalDifference");

describe("function takes in array and returns diagonal difference", () => {
  it("return type should be a number", () => {
    const result = diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(typeof result).toBe("number");
  });

  it("should pass test case 1", () => {
    const result = diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]);
    expect(result).toBe(15);
  });

  it("should pass test case 2", () => {
    const result = diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ]);
    expect(result).toBe(2);
  });
});
