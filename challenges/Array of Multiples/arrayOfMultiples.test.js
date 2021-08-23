const arrayOfMultiples = require("./arrayOfMultiples");

describe("fn takes in number and length arguments and returns of array of multiples of number until the length is reached", () => {
  it("should return an array", () => {
    const result = arrayOfMultiples(1, 2);
    expect(result).toBeInstanceOf(Array);
  });

  it("number argument should be at the 0 index of returned array", () => {
    const result = arrayOfMultiples(1, 2);
    expect(result[0]).toBe(1);
  });

  it("Should pass test array", () => {
    const result = arrayOfMultiples(7, 5);
    expect(result).toEqual([7, 14, 21, 28, 35]);
  });
});
