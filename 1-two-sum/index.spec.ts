import { expect, test } from "bun:test";
import { twoSum } from "./index";

let tests = [
  {
    nums: [2, 7, 11, 15],
    target: 9
  },
  {
    nums: [3, 2, 4],
    target: 6
  },
  {
    nums: [3, 3],
    target: 6
  }
];

let expected = [
  [0, 1],
  [1, 2],
  [0, 1]
];

for (let i = 0; i < tests.length; i++) {
  test(`Test ${i + 1}: Success`, () => {
    expect(twoSum(tests[i].nums, tests[i].target))
      .toEqual(expected[i]);
  });
}
