//두 단어의 글자 나열 순서는 다르지만 구성이 일치하는 것을 애너그램이라고 한다

const stringA = "listen";
const stringB = "silent";

// split(), sort(), and join()

// function isAnagram(strA, strB) {
//   if (strA.length !== strB.length) {
//     return false;
//   }
//   return strA.split("").sort().join() === strB.split("").sort().join();
// }

// console.log(isAnagram(stringA, stringB));

// map = {}
function isAnagram(strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }
  const hashMap = {};
  for (const char of strA) {
    hashMap[char] = hashMap[char] ? hashMap[char] + 1 : 1;
  }

  for (const char of strB) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
}

console.log(isAnagram(stringA, stringB));
