function solution(n) {
  let ternaryReverse = n.toString(3).split("").reverse().join("");
  return parseInt(ternaryReverse, 3);
}
