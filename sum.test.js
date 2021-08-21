const sum = require("./sum");

it("Should add two numbers and return results", () => {
    const result = sum(1,2);
    expect(result).toBe(3);
});