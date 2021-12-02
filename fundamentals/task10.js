// Rewrite the function using '?' and '||'.
// ==================================
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }
// ==================================

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// Honestly I looked this variant up on javascript.info, will remember bcs is is cool and shorter!
function checkAgeShorter(age) {
  return age > 18 || confirm("Did parents allow you?");
}
