function solution(arr) {
  const ans = arr.filter(el => el !== Math.min(...arr));
  return ans.length === 0 ? [-1] : ans;
}
