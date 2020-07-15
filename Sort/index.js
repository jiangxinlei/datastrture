import ArrayList from './ArrayList';

const al = new ArrayList();

let items = [23, 54, 42, 65, 122, 98, 78, 323, 743, 132];
al.insertItems(items);

// al.bubbleSort();
// al.selectionSort();
// al.insertionSort();
// al.shellSort();
al.quickSort();
console.log(al.toString());
