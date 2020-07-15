class Node {
  constructor(ele) {
    this.prev = null;
    this.ele = ele;
    this.next = null;
  }
}

// 双向链表
export default class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  /**
   * 向链表尾部添加一个新元素
   * @param {*} ele 
   */
  append(ele) {
    const node = new Node(ele);

    // 判断是否添加的是第一个节点
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    // 每添加一个节点，节点长度加 1
    this.length++;
  }

  /**
   * 向链表特定位置插入一个新元素
   * @param {*} pos 
   * @param {*} ele 
   */
  insert(pos, ele) {
    // 越界判断
    if (pos < 0 && pos > this.length) return false;

    const node = new Node(ele);

    // 判断链表是否为空
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      // 判断 pos 是否为空，在第一个节点插入
      if (pos === 0) {
        // 原来的第一个节点
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else if (pos === this.length) {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      } else {
        let current = this.head;
        let index = 0;

        while (index++ < pos) {
          current = current.next;
        }
        
        node.next = current;
        node.prev = current.prev;
        current.prev.next = node;
        current.prev = node;
      }
    }

    this.length++;
    return true;
  }

  /**
   * 获取对应位置的元素
   * @param {*} pos 
   */
  get(pos) {
    if(pos >= 0 && pos < this.length) {
      let current = this.head;
      let index = 0;

      while (index++ < pos) {
        current = current.next;
      }

      return current.ele;
    }
  }

  /**
   * 返回元素在链表中的索引，没有该元素则返回 -1
   * @param {*} ele 
   */
  indexOf(ele) {
    let current = this.head;
    let index = 0;

    // 开始查找，从 head 找到最后元素，没找到就返回 -1
    while (current) {
      if (current.ele === ele) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }

  /**
   * 修改某个位置的元素，改为新元素
   * @param {*} pos 
   */
  update(pos, newEle) {
    if (pos >= 0 && pos < this.length) {
      let current = this.head;
      let index = 0;

      while (index++ < pos) {
        current = current.next;
      }

      // 将 pos 位置的 node 的元素修改为新元素
      current.ele = newEle;
    }
  }

  /**
   * 从链表的特定位置移除一个元素
   * @param {*} pos 
   */
  removeAt(pos) {
    if (pos < 0 && pos >= this.length) return null;

    let current = this.head;

    // 判断是否只有一个节点
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // 判断是否删除的是第一个节点
      if (pos === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (pos === this.length - 1) {
        // 删除最后一个节点
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        let current = this.head;

        while (index++ < pos) {
          current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    this.length--;
    return current.ele;
  }

  /**
   * 从链表中移除一个元素
   * @param {*} ele 
   */
  remove(ele) {
    // 找到这个元素的位置，再根据 removeAt 方法删除元素
    return this.removeAt(this.indexOf(ele));
  }

  /**
   * 如果链表中没有任何元素，返回 true，否则返回 false
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 返回链表包含的元素个数
   */
  size() {
    return this.length;
  }

  /**
   * 取出每个节点数据，将数据以字符串形式打印出来
   */
  toString() {
    return this.backwardString()
  }

  /**
   * 返回正向遍历的节点字符串形式
   */
  forwardString() {
    let eleString = '';
    let current = this.tail;

    while (current) {
      eleString += current.ele + ' ';
      current = current.prev;
    }

    return eleString;
  }

  /**
   * 返回反向遍历的节点字符串形式
   */
  backwardString() {
    let eleString = '';
    let current = this.head;

    while (current) {
      eleString += current.ele + ' ';
      current = current.next;
    }

    return eleString;
  }
}