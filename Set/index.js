import Set from './Set';

const setA = new Set();
setA.add('jack');
setA.add('shq');
setA.add('senwell');


// console.log(set.values());

const setB = new Set();
setB.add('jack');
setB.add('senwell');
setB.add('jxl');

let newSet1 = setA.union(setB);
console.log(newSet1);

let newSet2 = setA.intersection(setB);
console.log(newSet2);

let newSet3 = setA.difference(setB);
console.log(newSet3);

let newSet4 = setA.subSet(setB);
console.log(newSet4);