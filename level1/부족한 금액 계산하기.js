function solution(price, money, count) {
  let answer = 0;
  const sum = (count / 2) * (price * 2 + (count - 1) * price);
  answer = sum > money ? sum - money : 0;
  return answer;
}
