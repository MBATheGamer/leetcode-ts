import { ListNode } from "./types";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = null;
  let currentNode = null;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    let node = new ListNode(sum % 10);

    carry = Math.floor(sum / 10);

    if (!currentNode) {
      currentNode = head = node;
    } else {
      currentNode.next = node;
      currentNode = currentNode.next;
    }
  }

  if (carry > 0 && currentNode) {
    currentNode.next = new ListNode(carry);
  }

  return head;
};
