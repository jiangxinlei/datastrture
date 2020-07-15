/**
 * 判断一个数是不是质数
 * 特点，只能被 1 和 num 整除，不能被 1 ~ num - 1 之间的数整除
 * 缺点，下面这种方式效率很低
 * @param {*} num 
 */
export function isPrime1(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



// 采用链地址法实现
export default class HashTable {
  storage = [];  // 存储元素的数组
  count = 0;     // 哈希表中已经存储多少元素
  limit = 7;     // 哈希表数组当前总长度，可以存放多少元素

  /**
   * 哈希函数
   * 1、将字符串转成比较大的数字，hashCode
   * 2、将大的数字 hashCode 压缩到数组范围（大小）之内
   */
  hashFn(str, size) {
    // 1、定义 hashCode 变量
    let hashCode = 0;
  
    // 2、霍纳算法，计算 hashCode 的值
    for (let i = 0; i < str.length; i++) {
      // 获取对应字符的 unicode 编码，比较大的 hashCode 值
      hashCode = hashCode * 37 + str.charCodeAt(i);
    }

  
    // 3、取余操作
    let index = hashCode % size;
  
    return index;
    
  }

  /**
   * 插入&修改操作
   * @param {作为索引转化} key 
   * @param {要保存的值} value 
   */
  put(key, value) {
    // 1、根据 key 获取对应的 index
    let index = this.hashFn(key, this.limit);

    // 2、根据 index 取出对应的 bucket
    let bucket = this.storage[index];

    // 3、判断该 bucket 是否为 null
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4、判断是否是修改数据
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    // 5、进行添加操作
    bucket.push([key, value]);
    this.count++;

    // 6、判断是否需要进行扩容操作
    if (this.count > this.limit * 0.75) {
      const newSize = this.limit * 2;
      const newPrime = this.getPrime(newSize);
      this.resize(newPrime);
    }
  }

  /**
   * 获取操作
   * @param {作为索引转化} key 
   */
  get(key) {
    // 1、根据 key 获取对应的 index
    let index = this.hashFn(key, this.limit);

    // 2、根据 index 取出对应的 bucket
    let bucket = this.storage[index];

    // 3、判断该 bucket 是否为 null
    if (!bucket) {
      return null;
    }

    // 4、有 bucket，进行线性查找
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    // 5、依然没有找到
    return null;
  }

  /**
   * 删除操作
   * @param {作为索引转化} key 
   */
  remove(key) {
    // 1、根据 key 获取对应的 index
    let index = this.hashFn(key, this.limit);

    // 2、根据 index 取出对应的 bucket
    let bucket = this.storage[index];

    // 3、判断该 bucket 是否为 null
    if (!bucket) {
      return null;
    }

    // 4、有 bucket，进行线性查找并且删除
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        // 缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          const newSize = Math.floor(this.limit / 2);
          const newPrime = this.getPrime(newSize);
          this.resize(newPrime);
        }

        return tuple[1];

      }
    }

    // 5、依然没有找到
    return null;
  }

  /**
   * 判断哈希表是否为空
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * 获取哈希表元素个数
   */
  size() {
    return this.count;
  }

  /**
   * 哈希表扩容 / 缩容
   * @param {*} newLimit 
   */
  resize(newLimit) {
    // 1、先保存旧数组内容
    let oldStorage = this.storage;

    // 2、重置所有的属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    // 3、遍历 oldStorage 中所有的 bucket
    for (let i = 0; i < oldStorage.length; i++) {
      // 3.1、取出对应的 bucket
      let bucket = oldStorage[i];

      // 3.2、判断 bucket 是否为 null
      if (!bucket) {
        continue;
      }

      // 3.3、bucket 中有数据，就取出数据，重新插入
      for (let j = 0; j < bucket.length; j++) {
        let tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }

  }

  /**
   * 判断一个数是不是质数
   * 分析，只要一个数可以进行因数分解，那么分解时得到的两个数一定是一个小于等于 sqrt(num)，大于等于 sqrt(num)
   * @param {*} num 
   */
  isPrime(num) {
    const temp = parseInt(Math.sqrt(num));

    for (let i = 2; i < temp; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * 获取质数
   * @param {*} num 
   */
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }

}