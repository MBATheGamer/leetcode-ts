import { expect, test } from "bun:test";
import { addTwoNumbers } from "./index";
import { ListNode } from "./types";

let tests = [
  {
    l1: new ListNode(
      2,
      new ListNode(
        4,
        new ListNode(3),
      )
    ),
    l2: new ListNode(
      5,
      new ListNode(
        6,
        new ListNode(4),
      )
    ),
  },
  {
    l1: new ListNode(0),
    l2: new ListNode(0),
  },
  {
    l1: new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                9,
                new ListNode(9)
              )
            )
          )
        )
      )
    ),
    l2: new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9)
        )
      )
    ),
  }
];

let expected = [
  new ListNode(
    7,
    new ListNode(
      0,
      new ListNode(8),
    )
  ),
  new ListNode(0),
  new ListNode(
    8,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            0,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  1,
                ),
              ),
            ),
          ),
        ),
      ),
    )
  ),
];

for (let i = 0; i < tests.length; i++) {
  test(`Test ${i + 1}: Success`, () => {
    expect(addTwoNumbers(tests[i].l1, tests[i].l2))
      .toEqual(expected[i]);
  });
}
