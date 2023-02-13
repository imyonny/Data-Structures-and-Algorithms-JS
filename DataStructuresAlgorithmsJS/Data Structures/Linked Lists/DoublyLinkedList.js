class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add node with given value to the last index
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove last node
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  // remove first node
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // push new node with given value at head
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get node at given index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // set node at given index to given value
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert new node with given value at given index
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = prevNode.next;

    (beforeNode.next = newNode), (newNode.next = afterNode);
    (newNode.prev = beforeNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  // delete node at given index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const removed = prevNode.next;
    const prevNode = this.get(index - 1);
    const nextNode = removed.next;

    (prevNode.next = nextNode), (nextNode.prev = prevNode);
    (removed.next = null), (removed.prev = null);

    this.length--;
    return removed;
  }
}
