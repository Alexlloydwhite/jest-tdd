const secondLargest = require("./secondLargest");

describe("fn takes array of numbers and returns the second largest number", () => {
  it("should return 40", () => {
    const result = secondLargest([10, 40, 30, 20, 50]);
    expect(result).toBe(40);
  });

  it("should return 105", () => {
    const result = secondLargest([25, 143, 89, 13, 105]);
    expect(result).toBe(105);
  });

  it("should return 23", () => {
    const result = secondLargest([54, 23, 11, 17, 10]);
    expect(result).toBe(23);
  });
});
