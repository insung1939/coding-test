function solution(n) {
  divisor = [n];
  for (let i = 1; i <= n / 2; i++) {
    n % i === 0 ? divisor.push(i) : divisor;
  }
  return divisor.reduce((acc, cur) => acc + cur);
}
