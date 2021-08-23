let animals = [];

describe("animals array", () => {
  beforeEach(() => {
    console.log("BEFORE EACH");
    animals = ["elephant", "zebra", "bear", "tiger"];
  });
  
  it("should add animal to end of array", () => {
    animals.push("alligator");
    expect(animals[animals.length - 1]).toBe("alligator");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it.only("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
