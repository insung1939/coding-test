function solution(sizes) {
  let width = [];
  let height = [];
  let arr = sizes.map(el => (el[0] < el[1] ? el.reverse() : el));
  arr.map(el => {
    width.push(el[0]), height.push(el[1]);
  });
  const widthVal = Math.max(...width);
  const heightVal = Math.max(...height);
  const answer = widthVal * heightVal;
  return answer;
}
