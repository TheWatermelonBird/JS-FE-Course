const deepCount = require("../task4");

describe("Calculate the items + depth of the array", () => {
  test("filled arrays", () => {
    expect(deepCount([1, 2, 3])).toBe(3);
    expect(deepCount(["x", "y", ["z"]])).toBe(4);
    expect(deepCount([1, 2, [3, 4, [5]]])).toBe(7);
  });
  test("empty arrays", () => {
    expect(deepCount([])).toBe(0);
    expect(deepCount([[[[[[[[[]]]]]]]]])).toBe(8);
  });
});
