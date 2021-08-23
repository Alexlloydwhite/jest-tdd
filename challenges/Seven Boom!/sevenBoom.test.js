const sevenBoom = require("./sevenBoom");

describe("function takes array of numbers and checks if the array contains the number 7", () => {
  it("should return Boom! if the array contains the number 7", () => {
    let result = sevenBoom([1, 2, 3, 4, 5, 6, 7]);
    expect(result).toBe("Boom!");
  });

  it("should return there is no 7 in the array if the array does not contain 7", () => {
    let result = sevenBoom([8, 6, 33, 100]);
    expect(result).toBe("there is no 7 in the array");
  });

  it("should check for nested 7's", () => {
    let result = sevenBoom([2, 55, 60, 97, 86]);
    expect(result).toBe("Boom!");
  });
});
