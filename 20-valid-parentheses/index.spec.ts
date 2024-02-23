import { expect, test } from "bun:test";
import { isValid } from "./index";

let tests = [
  "()",
  "()[]{}",
  "(]"
];

let expected = [
  true,
  true,
  false
];

for (let i = 0; i < tests.length; i++) {
  test(`Test ${i + 1}: Success`, () => {
    expect(isValid(tests[i]))
      .toBe(expected[i]);
  });
}
