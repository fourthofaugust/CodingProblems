// Is it a slinding window?
// Its an array, asking for the first negative element of a subarray, window size (mostly a sliding window question)
const firstNegativeNumber = (arr, windowSize) => {
  if (arr.length < windowSize) return 0;

  let start = 0;
  let end = 0;
  let retVal = [];
  let negativeElements = [];

  while (end < arr.length) {
    if (arr[end] < 0) {
      negativeElements.push(arr[end]);
    }
    if (end - start + 1 < windowSize) {
      end++;
    } else if (end - start + 1 === windowSize) {
      if (negativeElements.length === 0) {
        retVal.push(0);
      } else if (arr[start] === negativeElements[0]) {
        retVal.push(negativeElements[0]);
        negativeElements.shift();
      } else {
        retVal.push(negativeElements[0]);
      }
      start++;
      end++;
    }
  }
  return retVal;
};

const input = [2, -3, 4, 5, -6, 1, -10, 11, 6];
const windowSize = 3;

console.log(firstNegativeNumber(input, windowSize));
