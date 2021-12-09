// Array:
// Complete the method which accepts such an array,
// and returns that single different number (length >= 3)
// ==================================
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
// ==================================

function findDifferent(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

module.exports = findDifferent;
