import { expect, test } from "bun:test";
import { isAnagram } from "./index";

let tests = [
  ["anagram", "nagaram"],
  ["rat", "car"]
];

let expected = [
  true,
  false
];

for (let i = 0; i < tests.length; i++) {
  test(`Test ${i + 1}: Success`, () => {
    expect(isAnagram(tests[i][0], tests[i][1]))
      .toBe(expected[i]);
  });
}
