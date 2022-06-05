function solution(x) {
  let arr = x.toString().split("");
  const numArr = arr.map(el => parseInt(el));
  const sum = numArr.reduce((acc, cur) => acc + cur);
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}
