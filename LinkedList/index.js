import LinkedList from './LinkedList';
// import DoublyLinkedList from './DoublyLinkedList';

const linkedlist = new LinkedList();

linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(4);
// linkedlist.insert(1, 'jack');

// console.log(linkedlist);
// console.log(linkedlist.get(1));
// console.log(linkedlist.indexOf('shq'));
// linkedlist.update(1, 'hello')
// console.log(linkedlist);
// linkedlist.removeAt(1);
// console.log(linkedlist);

// const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.insert(0, 'jxl');
// doublyLinkedList.insert(0, 'shq');
// doublyLinkedList.insert(1, 'jack');
console.log(linkedlist.toString());

linkedlist.swapPairs(linkedlist.getHead());
console.log(linkedlist.toString());
