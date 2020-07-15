import Queue from './Queue';

function passGame(names, index) {
  const q = new Queue();
  // 将数组的元素依次入队列
  for(let i = 0; i < names.length; i++) {
    q.enqueue(names[i]);
  }

  while(q.size() > 1) {
    // 不是 index 时，重新入队尾
    // 是 index 时，将其从队列删除
    for(let i = 0; i < index - 1; i++) {
      q.enqueue(q.dequeue());
    }
    q.dequeue();
    console.log('out - ' + q.dequeue());
  }

  return q.dequeue();
}

passGame();