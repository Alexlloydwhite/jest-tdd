const addName = require("./addName");

describe("Given three arguments ⁠— an object obj, a name, and a value ⁠— return an object with that name and value in it (as key-value pairs).", () => {
  it("should return correct obj", () => {
    const result = addName({}, "Brutus", 300);
    expect(result).toStrictEqual({ Brutus: 300 });
  });

  it("should return correct obj 1", () => {
    const result = addName({ piano: 500 }, "Brutus", 400);
    expect(result).toStrictEqual({ piano: 500, Brutus: 400 });
  });

  it("should return correct obj 2", () => {
    const result = addName({ piano: 500, stereo: 300 }, "Caligula", 440);
    expect(result).toStrictEqual({ piano: 500, stereo: 300, Caligula: 440 });
  });
});
