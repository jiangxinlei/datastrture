class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  root = null;

  /**
   * 向树中插入一个新的键
   * 使用 递归
   * @param {*} key 
   */
  insert(key) {
    // 1、根据 key 创建节点
    const newNode = new Node(key);

    // 2、判断根节点是否有值
    if (this.root) {
      this.insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  /**
   * 插入节点
   * @param {*} node 和新节点比较的节点
   * @param {*} newNode 新节点
   */
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      // 向左查找
      // 判断左边有没有节点
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }

    } else {
      // 向右查找
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }

  /**
   * 在树中查找一个键，如果节点存在，返回 true，否则返回 false
   * @param {*} key 
   */
  search(key) {
    // 1、获取根节点
    let node = this.root;

    // 2、循环搜索 key
    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if(key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }

    return false;
  }

  /**
   * 通过中序遍历方式遍历所有节点
   */
  midOrderTraversal(handler) {
    this.midOrderTraversalNode(this.root, handler);
  }

  /**
   * 对节点进行中序遍历
   * @param {*} node 
   * @param {*} handler 回调函数
   */
  midOrderTraversalNode(node, handler) {
    if (node) {
      // 1、查找经过节点的子节点
      this.midOrderTraversalNode(node.left, handler);

      // 2、查找经过的节点
      handler(node.key);

      // 3、查找经过节点的右子节点
      this.midOrderTraversalNode(node.right, handler);
    }
  }

  /**
   * 通过先序遍历方式遍历所有节点
   *
   * @param {*} handler 回调函数
   */
  preOrderTraversal(handler) {
    this.preOrderTraversalNode(this.root, handler)
  }

  /**
   * 对节点进行先序遍历
   * @param {*} node 
   * @param {*} handler 回调函数
   */
  preOrderTraversalNode(node, handler) {
    if (node) {
      // 1、查找经过的节点
      handler(node.key);

      // 2、查找经过节点的子节点
      this.preOrderTraversalNode(node.left, handler);

      // 3、查找经过节点的右子节点
      this.preOrderTraversalNode(node.right, handler);
    }
  }

  /**
   * 通过后序遍历方式遍历所有节点
   */
  postOrderTraversal(handler) {
    this.postOrderTraversalNode(this.root, handler);
  }

  /**
   * 对节点进行后序遍历
   * @param {*} node 
   * @param {*} handler 回调函数
   */
  postOrderTraversalNode(node, handler) {
    if (node) {
      // 1、查找经过节点的子节点
      this.postOrderTraversalNode(node.left, handler);

      // 2、查找经过节点的右子节点
      this.postOrderTraversalNode(node.right, handler);

      // 3、查找经过的节点
      handler(node.key);
    }
  }

  /**
   * 返回树中最小的值/键
   */
  min() {
    let node = this.root;

    // 依次向左不断查找，知道节点为 null
    let key = null;
    while (node) {
      key = node.key;
      node = node.left;
    }

    return key;
  }

  /**
   * 返回树中最大的值/键
   */
  max() {
    let node = this.root;

    // 依次向右不断查找，知道节点为 null
    let key = null;
    while (node) {
      key = node.key;
      node = node.right;
    }

    return key;
  }

  /**
   * 从树中移除某个键
   * @param {*} key 
   */
  remove(key) {
    // 1、找到删除的节点
    // 1.1、定义变量，保存一些信息，要删除的节点、要删除节点的父节点、是否是父节点的左节点
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    // 1.2、开始寻找要删除的节点
    while (current.key !== key) {
      parent = current;

      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      // 已经找到叶子节点，依然没找到要删除的节点
      if (!current) return false;
    }

    // 2、找到了要删除的节点 current.key === key
    // 2.1、删除的节点是叶子节点
    if (!current.left && !current.right) {
      // current.left 和 current.right 都没有就是叶子节点

      // 删除的节点是根节点
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild){
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 2.2、删除的节点有一个子节点
    else if (!current.right) {
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
    } else if (!current.left) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.right;
      }
    }

    // 2.3、删除的节点有两个子节点
    else {
      // 1、获取后继节点
      let successor = this.getSuccessor(current);

      // 2、判断是否根节点
      if (current === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }

      // 3、将删除节点的左子树 = current.left
      successor.left = current.left;
    }
  }

  /**
   * 寻找要删除节点的前驱或后继节点
   * 前驱：在要删除的左子树中最大的节点
   * 后继：在要删除的右子树中最小的节点
   * @param {*} delNode 
   */
  getSuccessor(delNode) {
    // 1、定义变量，保存找到的后继节点
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode;

    // 2、循环查找
    while (current) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 3、判断寻找到的后继节点是否直接就是 delNode 的 right 节点
    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }
}

