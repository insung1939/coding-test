const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startNode) => {
  const visited = []; //탐색을 마친 노드들
  let needVisit = []; //탐색해야할 노드들

  needVisit.push(startNode); //노드 탐색 시작

  while (needVisit.length !== 0) {
    const node = needVisit.shift(); //큐이기 때문에 shift사용
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

const BFS = (graph, startNode) => {
  const visited = []; //탐색을 마친 노드들
  let needVisit = []; //탐색해야할 노드들

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(DFS(graph, "A"));
console.log(BFS(graph, "A"));
