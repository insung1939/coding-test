function solution(nums) {
  const pocketmonType = new Set(nums);
  return pocketmonType.size > nums.length / 2
    ? nums.length / 2
    : pocketmonType.size;
}
