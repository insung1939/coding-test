var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.slice(0, i).reduce((a, c) => a + c, 0) ===
      nums.slice(i + 1).reduce((a, c) => a + c, 0)
    ) {
      return i;
    }
  }
  return -1;
};
