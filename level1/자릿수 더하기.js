function solution(n) {
  return String(n)
    .split("")
    .map(el => Number(el))
    .reduce((acc, cur) => acc + cur);
}
