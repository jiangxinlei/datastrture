import PriorityQueue from './PriorityQueue';

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue('jxl', 1);
priorityQueue.enqueue('shq', 2);
console.log(priorityQueue.getItem());