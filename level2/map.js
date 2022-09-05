function solution(maps) {
  const dy = [1, 0, -1, 0]; //s e n w
  const dx = [0, 1, 0, -1];
  const row = maps.length;
  const col = maps[0].length;

  const visitCount = maps.map(r => r.map(c => 1));

  const start = [[0, 0]];

  while (start.length) {
    const [y, x] = start.shift();

    for (let i = 0; i < 4; i++) {
      if (maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
        visitCount[ny][nx] = visitCount[y][x] + 1;
        start.push([ny, nx]);
      }
    }
  }

  return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];
}
