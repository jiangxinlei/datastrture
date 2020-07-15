import Queue from '../Queue/Queue';

export default class Graph {
  vertexes = [];     // 节点
  edges = new Map();  // 边

  /**
   * 添加一个顶点的方法
   * @param {*} v 
   */
  addVertex(v) {
    this.vertexes.push(v);
    this.edges.set(v, []);
  }

  addVertexes(vs) {
    for (let i = 0; i < vs.length; i++) {
      this.addVertex(vs[i]);
    }
  }

  /**
   * 给两个顶点添加边
   * @param {*} v1 顶点1
   * @param {*} v2 顶点2
   */
  addEdge(v1, v2) {
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1);
  }

  /**
   * 初始化状态颜色
   * 每⼀一个节点有三种状态
   * 1、白色 - 尚未发现此节点
   * 2、灰色 - 发现其他节点连接到此，但未查找此节点全部连接的节点
   * 3、黑色 - 已经发现此节点连接的全部节点
   */
  initalizeColor() {
    let colors = [];
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = 'white';
    }

    return colors;
  }

  /**
   * 广度优先搜索
   * @param {*} initV 初始化顶点
   * @param {*} handler 处理顶点的回调函数
   */
  bfs(initV, handler) {
    // 1、初始化颜色
    let colors = this.initalizeColor();

    // 2、创建队列
    const queue = new Queue();

    // 3、将顶点加入到队列中
    queue.enqueue(initV);

    // 4、循环从队列取出元素
    while (!queue.isEmpty()) {
      // 4.1、从队列取出一个顶点
      let v = queue.dequeue();

      // 4.2、获取和顶点相连的另外顶点
      let vList = this.edges.get(v);

      // 4.3、将 v 的颜色设置成灰色
      colors[v] = 'gray';

      // 4.4、遍历所有顶点，并且加入到队列
      for (let i = 0; i < vList.length; i++) {
        let e = vList[i];

        if (colors[e] === 'white') {
          colors[e] = 'gray';
          queue.enqueue(e);
        }
      }

      // 4.5、访问顶点
      handler(v);

      // 4.6、将顶点设置为 黑色
      colors[v] = 'black';
    }
  }

  /**
   * 深度优先搜索
   * @param {*} initV 初始化顶点
   * @param {*} handler 处理顶点的回调函数
   */
  dfs(initV, handler) {
    // 1、初始化颜色
    let colors = this.initalizeColor();

    // 2、从某个顶点开始依次递归
    this.dfsVisit(initV, colors, handler);
  }

  dfsVisit(v, colors, handler) {
    // 1、将颜色设置为灰色
    colors[v] = 'gray';

    // 2、处理 v 顶点
    handler(v);

    // 3、访问 v 相连的顶点
    let vList = this.edges.get(v);
    for (let i = 0; i < vList.length; i++) {
      let e = vList[i];

      if (colors[e] === 'white') {
        this.dfsVisit(e, colors, handler);
      }
    }

    // 4、将 v 设置为黑色
    colors[v] = 'black';
  }

  toString() {
    // 1、定义字符串，保存最终结果
    let graphStr = '';

    // 2、遍历所有的顶点，以及顶点对应的边
    for (let i = 0; i < this.vertexes.length; i++) {
      graphStr += this.vertexes[i] + ' -> ';
      let vEdges = this.edges.get(this.vertexes[i]);

      for (let j = 0; j < vEdges.length; j++) {
        graphStr += vEdges[j] + ' ';
      }

      graphStr += '\n';
    }

    return graphStr;
  }
}