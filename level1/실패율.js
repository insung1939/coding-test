function solution(N, stages) {
  let answer = {};
  let ansArr = [];
  for (let i = 1; i <= N; i++) {
    answer[i] =
      stages.filter(el => el === i).length /
      stages.filter(el => el >= i).length;
  }
  for (let index in answer) {
    ansArr.push([index, answer[index]]);
  }
  ansArr.sort((a, b) => {
    return a[1] - b[1] > 0 ? -1 : 1;
  });
  return ansArr.map(el => parseInt(el[0]));
}
