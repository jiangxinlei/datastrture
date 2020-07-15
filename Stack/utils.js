import Stack from './Stack';

/**
 * 十进制转二进制
 * @param {十进制数} decNumber
 */
function dec2bin(decNumber) {
  // 1、定义栈对象
  const stack = new Stack();

  // 2、循环操作
  while (decNumber > 0) {
    // 2.1、获取余数，并且放入栈中
    stack.push(decNumber % 2);

    // 2.2、获取整除后的结果，作为下一次运行的数字
    decNumber = Math.floor(decNumber / 2);
  }

  // 3、从栈中取出 0 和 1
  let binString = '';
  while (!stack.isEmpty()) {
    binString += stack.pop();
  }
  console.log(binString);
  return binString;
} 
dec2bin(100);