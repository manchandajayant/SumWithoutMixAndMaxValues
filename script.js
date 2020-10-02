function minMax(arr) {
  //iterate and find out the minimum and maximum values in the array
  //once the program knows the minimum and maximum values, it iterates over the array
  //and if index is equal to minimum value then it does not count that or vice-versa
  // let minValue = arr[0];
  // let maxValue = arr[0];

  let minSum = 0;
  let maxSum = 0;

  let minValue = Math.min(...arr)
  let maxValue = Math.max(...arr)
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] < minValue) {
  //     minValue = arr[i];
  //   }
  //   if (arr[i] > maxValue) {
  //     maxValue = arr[i];
  //   }
  // }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== minValue) {
      minSum += arr[j];
    }
    if (arr[j] !== maxValue) {
      maxSum += arr[j];
    }
  }
  console.log(minSum, maxSum);
}

minMax([1, 4, 2, 0, 3, 9]);
