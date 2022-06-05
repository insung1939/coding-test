function solution(x, n) {
  let arr = new Array(n);
  arr.fill(x);
  const answer = arr.map((el, index) => {
    return el * (index + 1);
  });
  return answer;
}
