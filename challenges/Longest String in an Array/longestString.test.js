const longestString = require("./longestString");

describe("function takes array of strings, returns the longest string", () => {
  it("Should return longest string", () => {
    const result = longestString(["one", "two", "three"]);
    expect(result).toBe("three");
  });

  it("Should return string first index if all strings are same length", () => {
    const result = longestString(["one", "two"]);
    expect(result).toBe("one");
  });
});
