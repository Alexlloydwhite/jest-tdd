const mostCommon = require("./mostCommon");

describe("function takes a string, returns most commonly used char", () => {
  it("should return a", () => {
    let result = mostCommon("faang");
    expect(result).toBe("a");
  });

  it("should return last if char shows up more than once", () => {
    let result = mostCommon("ffaanngg");
    expect(result).toBe("g");
  });
});
