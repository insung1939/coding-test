function solution(s, n) {
  const lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let answer = [];
  const changeStr = (arr, letter) => {
    if (arr.includes(letter)) {
      let idx = arr.indexOf(letter) + n;
      idx > 25 ? (idx = idx - 26) : idx;
      answer.push(arr[idx]);
    }
  };
  for (let i = 0; i < s.length; i++) {
    s[i] === " " ? answer.push(" ") : answer;
    changeStr(lowercase, s[i]);
    changeStr(uppercase, s[i]);
  }
  return answer.join("");
}
