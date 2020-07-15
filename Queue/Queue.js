export default class Queue {
  items = [];

  /**
   * 入队 - 向队尾添加一个或多个新元素
   * @param {*} ele 
   */
  enqueue(ele) {
    this.items.push(ele);
  }

  /**
   * 出队 - 移除队列头部的元素，并返回被移除的元素
   */
  dequeue() {
    return this.items.shift();
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