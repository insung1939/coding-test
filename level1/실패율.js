function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    answer.push([
      i,
      stages.filter(el => el === i).length /
        stages.filter(el => el >= i).length,
    ]);
  }
  answer.sort((a, b) => {
    return a[1] - b[1] > 0 ? -1 : 1;
  });
  return answer.map(el => el[0]);
}
