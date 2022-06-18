function solution(absolutes, signs) {
  const answer = absolutes.map((num, index) => (signs[index] ? num : -num));
  return answer.reduce((acc, cur) => acc + cur);
}
