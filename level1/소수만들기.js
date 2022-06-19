function solution(nums) {
  let answer = 0;
  const isPrime = val => {
    for (let i = 2; i <= Math.sqrt(val); i++) {
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrime(nums[i] + nums[j] + nums[k]) ? answer++ : answer;
      }
    }
  }
  return answer;
}
