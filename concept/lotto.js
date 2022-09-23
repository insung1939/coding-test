function Lotto() {
  let lotto = [];
  while (lotto.length < 6) {
    let num = Math.floor(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
      lotto.push(num);
    }
  }
  return lotto;
}

console.log(Lotto());
