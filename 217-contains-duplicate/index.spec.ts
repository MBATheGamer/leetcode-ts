import { expect, test } from "bun:test";
import { containsDuplicate } from "./index";

let tests = [
  [1, 2, 3, 1],
  [1, 2, 3, 4],
  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
];

let expected = [
  true,
  false,
  true
];

for (let i = 0; i < tests.length; i++) {
  test(`Test ${i + 1}: Success`, () => {
    expect(containsDuplicate(tests[i]))
      .toBe(expected[i]);
  });
}
