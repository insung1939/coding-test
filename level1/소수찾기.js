function solution(n) {
  //소수찾기의 핵심은 소수가 소수의 루트보다 작은 수들로 나누어떨어지지 않으면 소수다.
  let ans = [];
  const isPrime = num => {
    if (num === 2 || num === 3) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  };
  for (let i = 2; i <= n; i++) {
    isPrime(i) ? ans.push(i) : ans;
  }
  return ans.length;
}
