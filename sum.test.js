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

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(7);
    expect(value).toBeLessThanOrEqual(4);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });
});

describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  const shoppingLists = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];
  expect(shoppingLists).toContain('milk');
});
