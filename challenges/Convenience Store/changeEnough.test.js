const changeEnough = require("./changeEnough");

describe("given total due and array representing change, determine wether you can afford the item", () => {
  it("should return false", () => {
    let result = changeEnough([2, 100, 0, 0], 14.11);
    expect(result).toBe(false);
  });

  it("should return true", () => {
    let result = changeEnough([0, 0, 20, 5], 0.75);
    expect(result).toBe(true);
  });

  it("should return true", () => {
    let result = changeEnough([30, 40, 20, 5], 12.55);
    expect(result).toBe(true);
  });

  it("should return false", () => {
    let result = changeEnough([10, 0, 0, 50], 3.85);
    expect(result).toBe(false);
  });

  it("should return false", () => {
    let result = changeEnough([1, 0, 5, 219], 19.99);
    expect(result).toBe(false);
  });
});
