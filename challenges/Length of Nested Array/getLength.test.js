const getLength = require("./getLength");

describe("function returns length of non-nested items in a nested array", () => {
  it("should return 0 given an empty array", () => {
    const result = getLength([]);
    expect(result).toBe(0);
  });

  it("should return 3", () => {
    const result = getLength([1, [2, 3]]);
    expect(result).toBe(3);
  });

  it("should return 4", () => {
    const result = getLength([1, [2, [3, 4]]]);
    expect(result).toBe(4);
  });

  it("should return 5", () => {
    const result = getLength([1, [2], 1, [2], 1]);
    expect(result).toBe(5);
  });

  it("should return 6", () => {
    getLength([1, [2, [3, [4, [5, 6]]]]]);
    expect(result).toBe(6);
  });
});
