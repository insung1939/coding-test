function solution(n, m) {
  let answer = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  let GCDArr = [];
  for (let i = 1; i <= min; i++) {
    n % i === 0 && m % i === 0 ? GCDArr.push(i) : GCDArr;
  }
  answer.push(GCDArr[GCDArr.length - 1]);

  for (let i = max; i <= min * max; i++) {
    if (i % n === 0 && i % m === 0) {
      answer.push(i);
      break;
    }
  }
  return answer;
}
