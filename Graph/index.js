import Graph from './Graph';

import { orangesRotting } from './utils';

const g = new Graph();

const myVertexes = ['A', 'B', 'C', 'D'];

g.addVertexes(myVertexes);

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('C', 'D');

// g.bfs(g.vertexes[0], (v) => {
//   let vstr = '';
//   vstr += v + ' ';
//   console.log(vstr);
// });

// g.dfs(g.vertexes[0], (v) => {
//   let vstr = '';
//   vstr += v + ' ';
//   console.log(vstr);
// });

orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);