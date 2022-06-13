function solution(d, budget) {
  d.sort((a, b) => {
    return a - b > 0 ? 1 : -1;
  });
  let answer = [];
  for (let i = 0; i < d.length; i++) {
    answer.push(d[i]);
    if (answer.reduce((acc, cur) => acc + cur) > budget) {
      answer.pop(d[i]);
      break;
    }
  }
  return answer.length;
}
