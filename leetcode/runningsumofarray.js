var runningSum = function (nums) {
  return nums.map(
    (el, index) =>
      (el = nums.slice(0, index + 1).reduce((acc, cur) => acc + cur))
  );
};
