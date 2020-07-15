import BinarySearchTree from './BinarySearchTree';

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(12);
bst.insert(3);
bst.insert(8);
bst.insert(6);
bst.insert(17);
bst.insert(21);
let bstStr = '';

bst.postOrderTraversal((key) => {
  bstStr += key + ' ';
})


bst.search(8);
bst.remove(3);

console.log(bst);

