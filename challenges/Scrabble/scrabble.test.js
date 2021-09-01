const scrabble = require("./scrabble.js");

describe("scrabble function accepts string of letters and returns a score", () => {
  it("it should output a number", () => {
    let result = scrabble("asdf");
    expect(typeof result).toBe("number");
  });

  it.each([
    ["A", 1],
    ["E", 1],
    ["AE", 2],
    ["I", 1],
    ["O", 1],
    ["U", 1],
    ["L", 1],
    ["N", 1],
    ["R", 1],
    ["S", 1],
    ["T", 1],
    ["D", 2],
    ["G", 2],
    ["TDG", 5],
    ["B", 3],
    ["C", 3],
    ["M", 3],
    ["P", 3],
    ["F", 4],
    ["H", 4],
    ["V", 4],
    ["W", 4],
    ["K", 5],
    ["J", 8],
    ["X", 8],
    ["Q", 10],
    ["Z", 10],
    ["QZ", 20],
  ])("it correctly scores %s", (letter, score) => {
    expect(scrabble(letter)).toBe(score);
  });

  it("should pass provided example and output correct score", () => {
    let result = scrabble("cabbage");
    expect(result).toEqual(14);
  });
});
