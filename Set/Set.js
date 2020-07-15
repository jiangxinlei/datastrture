// 集合特点：无序、不重复

export default class Set {
  items = {}

  /**
   * 集合中添加新元素
   * @param {*} val 
   */
  add(val) {
    // 判断集合中是否包含该元素
    if (this.has(val)) {
      return false;
    }

    this.items[val] = val;
    return true;
  }

  /**
   * 从集合中移除一个元素
   * @param {*} val 
   */
  remove(val) {
    // 判断集合中是否有该元素
    if (!this.has(val)) {
      return false;
    }

    // 包含就删除
    delete this.items[val];
    return true;
  }

  /**
   * 判断一个元素是否在集合中，在就返回 true，不在返回 false
   * @param {*} val 
   */
  has(val) {
    // 包含返回 true
    return this.items.hasOwnProperty(val);
  }

  /**
   * 移除集合所有元素
   */
  clear() {
    this.items = {};
  }

  /**
   * 返回集合元素数量
   */
  size() {
    return Object.keys(this.items).length;
  }

  /**
   * 返回集合中所有元素的数组
   */
  values() {
    return Object.keys(this.items);
  }

  /**
   * 并集 - 两个集合相加去重后的所有元素
   * this - 集合 A
   * otherSet - 集合 B
   * @param {*} otherSet 
   */
  union(otherSet) {
    const newSet = new Set();

    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      newSet.add(values[1]);
    }

    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      newSet.add(values[i]);
    }

    return newSet;
  }

  /**
   * 交集 - 既存在集合A 又 存在集合 B 中的元素
   * this - 集合 A
   * otherSet - 集合 B
   * @param {*} otherSet 
   */
  intersection(otherSet) {
    const newSet = new Set();

    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      const item = values[i];
      if (otherSet.has(item)) {
        newSet.add(item);
      }
    }

    return newSet;
  }

  /**
   * 差集 - 集合 A 减去两个集合共同元素
   * this - 集合 A
   * otherSet - 集合 B
   * @param {*} otherSet 
   */
  difference(otherSet) {
    const newSet = new Set();

    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      const item = values[i];
      if (!otherSet.has(item)) {
        newSet.add(item);
      }
    }

    return newSet;
  }

  /**
   * 子集 - 集合 A 包含集合 B
   * this - 集合 A
   * otherSet - 集合 B
   * @param {*} otherSet 
   */
  subSet(otherSet) {
    let values = this.values();

    // 依次遍历，只要集合 B 中有一个元素不在集合 A 中，就返回 false；否则返回 true
    for (let i = 0; i < values.length; i++) {
      const item = values[i];
      if (!otherSet.has(item)) {
        return false;
      }
    }

    return true;
  }
}