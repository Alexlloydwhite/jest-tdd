const compareTriplets = require("./compareTriplets");

describe("compare input arrays and return array containing score", () => {
  it("should return an array", () => {
    const result = compareTriplets([1, 2, 3], [1, 2, 3]);
    expect(result).toBeInstanceOf(Array);
  });

  it("should pass test case 1", () => {
    const result = compareTriplets([5, 6, 7], [3, 6, 10]);
    expect(result).toEqual([1, 1]);
  });
});
