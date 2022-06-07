function solution(s) {
  let arr = s.toLowerCase().split("");
  let pCount = 0;
  let yCount = 0;
  arr.map(el => (el === "p" ? pCount++ : el === "y" ? yCount++ : yCount));
  return pCount === yCount ? true : false;
}
