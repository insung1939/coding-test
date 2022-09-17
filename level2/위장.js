function solution(clothes) {
  let answer = 1;
  let closet = new Object();
  for (let cloth of clothes) {
    closet[cloth[1]] = (closet[cloth[1]] || 0) + 1;
  }
  for (let value of Object.values(closet)) {
    answer *= value + 1;
  }
  return answer - 1;
}
