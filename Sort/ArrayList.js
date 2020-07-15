export default class ArrayList {
  items = [];

  /**
   * 将数据插入到数组中
   * @param {*} item 
   */
  insert(item) {
    this.items.push(item);
  }

  insertItems(items) {
    if (Array.isArray(items)) {
      let len = items.length;
      for (let i = 0; i < len; i++) {
        this.insert(items[i]);
      }
    }
  }

  /**
   * toString
   */
  toString() {
    return this.items.join('-');
  }

  /**
   * 交换两个位置的数据
   * @param {*} x 
   * @param {*} y 
   */
  swap(x, y) {
    [this.items[x], this.items[y]] = [this.items[y], this.items[x]];
  }

  /**
   * 冒泡排序
   */
  bubbleSort() {
    // 获取数组的长度
    let len = this.items.length;

    
    for (let i = len - 1; i >= 0; i--) {
      // 第一次比较：   i = 0，比较 0 和 1 位置的两个数据，如果 i 数据位置大于 i + 1 的数据，则交换位置
      // 最后一次比较： i = length - 2，比较 length - 2 和 length - 1 的两个数据
      for (let j = 0; j < i; j++) {
        if (this.items[j] > this.items[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  /**
   * 选择排序
   */
  selectionSort() {
    // 获取数组的长度
    let len = this.items.length;

    for (let i = 0; i < len - 1; i++) {
      let min = i;

      for (let j = min + 1; j < len; j++) {
        if (this.items[min] > this.items[j]) {
          min = j;
        }
      }
      this.swap(min, i);
    }
  }

  /**
   * 插入排序
   */
  insertionSort() {
    // 1、获取数组的长度
    let len = this.items.length;

    // 2、外层循环：从第一个位置开始获取数据，向前局部有序进行插入
    for (let i = 0; i < len; i++) {

      // 3、内层循环：获取 i 位置的元素，和前面的数据依次进行比较
      let item = this.items[i];
      let j = i;
      while (this.items[j - 1] > item && j > 0) {
        this.items[j] = this.items[j - 1];
        j--;
      }

      // 4、将 j 位置的数据，放置 item 
      this.items[j] = item;
    }
  }

  /**
   * 希尔排序
   */
  shellSort() {
    // 1、获取数组的长度
    let len = this.items.length;

    // 2、初始化的增量（gap -> 间隔、间隙）
    let gap = Math.floor(len / 2);

    // 3、while 循环，gap 不断减小
    while (gap >= 1) {

      // 4、以 gap 为间隔进行分组
      for (let i = gap; i < len; i++) {
        let item = this.items[i];
        let j = i;

        while (this.items[j - gap] > item && j > gap - 1) {
          this.items[j] = this.items[j - gap];
          j -= gap;
        }

        // 5、将 j 位置的元素赋值 item
        this.items[j] = item;
      }

      gap = Math.floor(gap / 2);
    }
  }


  /**
   * 找到枢纽，放到中间位置
   * @param {*} left 
   * @param {*} right 
   */
  median(left, right) {
    // 1、取出中间的位置
    let center = Math.floor((left + right) / 2);
    
    // 2、判断大小，并且进行交换
    if (this.items[left] > this.items[center]) {
      this.swap(left, center);
    }

    if (this.items[center] > this.items[right]) {
      this.swap(center, right);
    }

    if (this.items[left] > this.items[right]) {
      this.swap(left, right);
    }

    // 3、将 center 换到 right - 1 的位置
    this.swap(center, right - 1);

    return this.items[right - 1];
  }

  /**
   * 快速排序
   */
  quickSort() {

    this.quick(0, this.items.length - 1);
  }

  quick(left, right) {

    // 1、结束条件
    if (left >= right) return;

    // 2、获取枢纽
    let pivot = this.median(left, right);

    // 3、定义遍历，用于记录当前找到的位置
    let i = left;
    let j = right - 1;

    // 4、开始进行交换
    while (true) {
      while (this.items[++i] < pivot) {}
      while (this.items[--j] < pivot) {}

      if (i < j) {
        this.swap(i, j);
      } else {
        break;
      }
    }

    // 5、将枢纽放置在 正确的位置， i 的位置
    this.swap(i, right - 1);

    this.quick(left, i - 1);
    this.quick(i + 1, right);

  }
}