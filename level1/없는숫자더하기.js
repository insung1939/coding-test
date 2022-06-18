function solution(numbers) {
  let allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const answer = allNumbers.filter(el => !numbers.includes(el));
  return answer.reduce((acc, cur) => acc + cur);
}
