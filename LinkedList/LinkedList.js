class Node {
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

// 单向链表
export default class LinkedList {
  head = null;
  length = 0;

  /**
   * 向链表尾部添加一个新元素
   * @param {*} ele 
   */
  append(ele) {
    const node = new Node(ele);

    if(this.head) {
      // 链表不为空时
      let current = this.head;

      // 判断 next 节点是不是为空，不为空 current = next 节点
      while (current.next) {
        current = current.next;
      }

      // 为空时，current 即为最后的节点，将 node 设置为 current.next 
      current.next = node;
    } else {
      // 链表为空，即添加第一个节点
      this.head = node;
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
    if(pos >= 0 && pos <= this.length) {
      const node = new Node(ele);

      // 要么在第一个节点插入，要么在 head 后任意位置插入
      if (pos === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let index = 0;
        let previous = null;
        let current = this.head;
  
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }
  
        node.next = current;
        previous.next = node;
      }
  
      this.length++;
    }
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
   * 获取 head 元素
   */
  getHead() {
    return this.head;
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
    if (pos >= 0 && pos < this.length) {
      let current = this.head;
      // 判断是否删除第一个元素
      if (pos === 0) {
        this.head = this.head.next;
      } else {
        let index = 0;
        let previous = null;

        while (index++ < pos) {
          previous = current;
          current = current.next;
        }

        // 前一个元素的 next 指向 current 的 next
        previous.next = current.next;
      }

      this.length--;
      return current.ele;
    }
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
    let eleString = '';
    let current = this.head;

    while (current) {
      eleString += current.ele + ' ';
      current = current.next;
    }

    return eleString;
  }

  swapPairs(head) {
    if (head === null || head.next === null ) {
      return head;
    };

    let next = head.next;

    head.next = this.swapPairs(next.next);

    next.next = head;

    return next;
  }
}