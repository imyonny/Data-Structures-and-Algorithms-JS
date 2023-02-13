// (FILO) FIRST IN LAST OUT
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push value to stack
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // remove last value from
  pop() {
    if (!this.first) return null;
    const removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }
}
