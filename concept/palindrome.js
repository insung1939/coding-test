//앞으로 뒤로 읽었을 때 같은 문자열

//1.추가문자열 활용
// function checkPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed === str;
// }
// console.log(checkPalindrome("david"));

//투포인터 활용
function checkPalindrome(str) {
  const len = str.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(len - i - 1)) {
      return false;
    }
  }
  return true;
}
console.log(checkPalindrome("abba"));
