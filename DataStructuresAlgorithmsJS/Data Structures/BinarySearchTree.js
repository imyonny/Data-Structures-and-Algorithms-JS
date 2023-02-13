// Termilolgy:
// - Root - The top node in a tree.
// - Child - A node directly connected to another node when moving away from the root.
// - Parent - The converse notion of a child.
// - Siblings - A group of nodes with the same parents.
// - Leaf - A node with no children.
// - Edge - The connection between one node with another.

// How BTSs work?
// - Every parent has at most two children .
// - Every node to the left of a parent node is always less than the parent.
// - Every node to the right of a parent node is always greater than the parent.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert new node to tree with given value
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  // find node with given value
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  breathFirstSearch() {
    const queue = [],
      data = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  depthFirstSearchPreorder() {
    const data = [];
    let current = this.root;
    const traverse = node => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }

  depthFirstSeatchPostorder() {
    const data = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };
    traverse(current);
    return data;
  }

  depthFistSearchInorder() {
    const data = [];
    let current = this.root;
    const traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
}
