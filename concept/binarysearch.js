function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (target < arr[middle]) {
      high = middle - 1;
    } else if (target > arr[middle]) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 55, 70], 55));
