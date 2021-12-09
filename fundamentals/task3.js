// Array:
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
// ==================================
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// ==================================

function createPhoneNumber(d) {
  //   ugly code
  //   return `(${d[0]}${d[1]}${d[2]}) ${d[3]}${d[4]}${d[5]}-${d[6]}${d[7]}${d[8]}${d[9]}`;

  //   regexp code
  let number = d.join("");
  let segment = number.match(/^(\d{3})(\d{3})(\d{4})$/);
  return `(${segment[1]}) ${segment[2]}-${segment[3]}`;
}
