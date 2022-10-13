function solution(board) {
  //방문 배열
  let visited = Array.from(Array(4), () => Array(4).fill(false));
  //정답들을 담는 배열
  let answer = [];
  //게임보드에서의 x축 y축 움직임
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y, cnt) {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      //보드 좌표 영역 벗어날 경우
      if (nx <= -1 || ny <= -1 || nx >= 4 || ny >= 4) continue;
      //이동 후 좌표가 이전의 좌표와 색이 동일하고 방문하지 않은 좌표일때
      if (board[nx][ny] === board[x][y] && !visited[nx][ny]) {
        visited[nx][ny] = true;
        dfs(nx, ny, cnt + 1);
        visited[nx][ny] = false;
      } else {
        answer.push(cnt);
      }
    }
  }

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      visited[x][y] = true;
      dfs(x, y, 1);
      visited[x][y] = false;
    }
  }

  const count = Math.max(...answer);
  return count !== 1 ? count : -1;
}

function solution(sticker) {
  const length = sticker.length;
  //첫번째 스티커를 뜯는 dp arr
  const dp_first = Array(length).fill(0);
  //첫번째 스티커를 뜯지 않는 dp arr
  const dp_second = Array(length).fill(0);

  //dp arr 초기값 설정
  dp_first[0] = sticker[0];
  dp_first[1] = sticker[0];
  dp_second[1] = sticker[1];

  for (let i = 2; i < length; i++) {
    //dp_first는 마지막 스티커를 뜯지 못하기 때문에 조건 추가
    if (i !== length - 1) {
      dp_first[i] = Math.max(dp_first[i - 1], dp_first[i - 2] + sticker[i]);
    } else {
      dp_first[i] = dp_first[i - 1];
    }
    dp_second[i] = Math.max(dp_second[i - 1], dp_second[i - 2] + sticker[i]);
  }

  return Math.max(dp_first[length - 1], dp_second[length - 1]);
}
