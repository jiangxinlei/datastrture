import Stack from './Stack';

const stack = new Stack();

stack.push(3);
stack.push(6);
stack.push(9);
stack.push(6);
stack.push(4);
stack.push(1);


console.log(stack.peek());
console.log(stack.toString());