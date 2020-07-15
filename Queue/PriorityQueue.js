class QueueItem {
  
  constructor(items, priority) {
    this.items = items;
    this.priority = priority;
  }
}

export default class PriorityQueue {
  items = [];

  enqueue(ele, priority) {
    const items = new QueueItem(ele, priority);

    // 判断队列是否为空
    if(this.isEmpty()) {
      this.items.push(items);
    } else {
      // 用插入元素的优先级和已有元素的优先级进行比较，
      const preIndex = this.items.findIndex((item) => items.priority > item.priority);
      if (preIndex > -1) {
        this.items.splice(preIndex, 0, items);
      } else {
        this.items.push(items);
      }
    }
  }

  /**
   * 返回队列头，队列的第一个元素，即最先被添加的元素
   */
  front() {
    return this.items[0];
  }

  /**
  * 返回队列里元素个数
  * @param {*} ele 
  * @return { number }
  */
  size() {
    return this.items.length;
  }

  /**
   * 判断队列是否为空，空返回 true，不为空返回 false
   * @return { boolean }
   */
  isEmpty() {
    return !this.items.length;
  }

  /**
   * 返回队列元素
   */
  getItem() {
    return this.items;
  }

  /**
   * 清空队列
   */
  clear() {
    this.items = [];
  }

  /**
   * 以字符串形式返回队列结构
   * @return { string }
   */
  toString() {
    return this.items.toString();
  }
}