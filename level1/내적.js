function solution(a, b) {
  const answer = a
    .map((el, index) => el * b[index])
    .reduce((acc, cur) => acc + cur);
  return answer;
}
