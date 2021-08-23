const checkTrue = require("./true");

describe("Returns number of true values in array", () => {
  it("should return 2 given array with 2 true values", () => {
    const result = checkTrue([true, false, false, true, false]);
    expect(result).toBe(2);
  });

  it("should return 0 given array with 0 true values", () => {
    const result = checkTrue([false, false, false, false]);
    expect(result).toBe(0);
  });

  it("should return 0 given an empty array", () => {
    const result = checkTrue([]);
    expect(result).toBe(0);
  });
});
