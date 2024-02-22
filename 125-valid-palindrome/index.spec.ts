import { expect, test } from "bun:test";
import { isPalindrome } from "./index";

let tests = [
  "A man, a plan, a canal: Panama",
  "race a car",
  ""
];

let expected = [
  true,
  false,
  true
];

for (let i = 0; i < tests.length; i++) {
  test(`Test ${i + 1}: Success`, () => {
    expect(isPalindrome(tests[i]))
      .toBe(expected[i]);
  });
}
