const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// const uniqueNums = [...new Set(nums)];
// console.log(uniqueNums);

// const uniqueNums = nums.filter((item, index) => {
//   return nums.indexOf(item) === index;
// });
// console.log(uniqueNums);

function uniqueNums(arr) {
  const uniqueElements = {};
  const result = [];
  for (let element of arr) {
    if (!uniqueElements[element]) {
      result.push(element);
    }
    uniqueElements[element] = element;
  }
  console.log(uniqueElements);
  return result;
}

uniqueNums(nums);
