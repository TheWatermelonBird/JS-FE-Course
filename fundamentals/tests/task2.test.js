const findDifferent = require("../task2");

describe("Find a single different number in array", () => {
  test("the  number is in last position", () => {
    expect(findDifferent([1, 1, 2])).toBe(2);
    expect(findDifferent([17, 17, 17, 17, 17, 17, 3])).toBe(3);
  });
  test("the  number is in first position", () => {
    expect(findDifferent([2, 1, 1])).toBe(2);
    expect(findDifferent([3, 17, 17, 17, 17, 17, 17])).toBe(3);
  });
  test("the  number is in middle position", () => {
    expect(findDifferent([1, 2, 1])).toBe(2);
    expect(findDifferent([17, 17, 3, 17, 17, 17, 17])).toBe(3);
    expect(findDifferent([4, 4, 0, 4, 4, 4, 4])).toBe(0);
  });
});
