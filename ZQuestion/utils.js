export function distributeCandies(candies, num_person) {
  let candiesList = Array(num_person).fill(0);
  let curNum = 1;     // 当前每个人可分到的糖果数
  let curIndex = 0;   // 当前人的下标

  while (candies) {

    // 如果剩余糖果总数 < 当前每个人可分到的糖果数
    if (candies < curNum) {
      // 就把剩余的糖果数都给到当前那个人
      candiesList[curIndex] += candies;
      break;
    }

    // 当前人已有糖果数加上可分到的糖果数
    candiesList[curIndex] += curNum;
    
    // 依次循环每个人
    curIndex = (curIndex + 1) % num_person;
    
    // 糖果数量 = 剩余数量 - 每轮已经分过的数量
    candies -= curNum++;

  }

  return candiesList;
}

/**
 * 杨辉三角
 * 最重要的规则：第 i 行、第 j 列的数字，等于 第 i−1 行、第 j−1 列 + 第 i−1 行、第 j 列
 * @param {*} numRows 
 */
export function generate(numRows) {
  let outerList = [];

  if (numRows <= 0) {
    return outerList;
  }

  for (let i = 0; i < numRows; i++) {
    let innerList = [];

    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i ) {
        innerList.push(outerList[i-1][j-1] + outerList[i-1][j]);
      } else {
        innerList.push(1);
      }
    }

    outerList.push(innerList);
  }

  return outerList;
}
