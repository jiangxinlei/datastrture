class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class Tree {
  root = null;

  insert(key) {
    const newNode = new Node(key);

    if (this.root) {
      this.insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      // 向左插入
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else {
      // 向右插入
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }

  search(key) {
    let node = this.root;

    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  }

  preOrderNode(node, handler) {
    if (node) {
      handler(node.key);

      this.preOrder(node.left, handler);
      this.preOrder(node.right, handler);
    }
  }
  preOrder(handler) {
    this.preOrderNode(this.root, handler);
  }

  midOrderNode(node, handler) {
    if (node) {
      this.midOrderNode(node.left, handler);

      handler(node.key);

      this.midOrderNode(node.right, handler);
    }
  }
  midOrder(handler) {
    this.midOrderNode(this.root, handler);
  }

  afterOrderNode(node, handler) {
    if (node) {
      this.afterOrderNode(node.left, handler);

      this.afterOrderNode(node.right, handler);

      handler(node.key);
    }
  }
  afterOrder(handler) {
    this.afterOrderNode(this.root, handler);
  }

  min() {
    let node = this.root;
    let key = null;
    while (node) {
      key = node.key;
      node = node.left;
    }

    return key;
  }

  max() {
    let node = this.root;
    let key = null;
    while (node) {
      key = node.key;
      node = node.right;
    }

    return key;
  }
}