const sum = require("./sum");

describe("Example test", () => {
  it("Should add two numbers and return results", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  // empty object or array will
  // return false on {} === {}
  // use toEqual instead of toBe
  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("truthy or falsy", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    // not will give opposite here
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });
});
