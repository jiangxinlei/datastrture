export default class Stack {
  items = [];

  /**
   * 入栈 - 添加新元素到栈顶
   */
  push(ele) {
    this.items.push(ele);
  }

  /**
   * 出栈 - 移除栈顶元素，同时返回被移除的元素
   */
  pop() {
    return this.items.pop();
  }

  /**
   * 仅返回栈顶元素
   */
  peek() {
    return this.items.slice(-1);
  }

  /**
   * 判断栈是否为空，空返回 true，不为空返回 false
   * @return { boolean }
   */
  isEmpty() {
    return !this.items.length;
  }

  /**
   * 返回栈里元素个数
   * @param {*} ele 
   * @return { number }
   */
  size(ele) {
    return this.items.length;
  }

  /**
   * 清空栈
   */
  clear() {
    this.items = [];
  }

  /**
   * 返回栈元素
   */
  getItem() {
    return this.items;
  }

  /**
   * 以字符串形式返回栈结构
   * @return { string }
   */
  toString() {
    return this.items.toString();
  }
}