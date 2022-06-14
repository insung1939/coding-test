function lotto() {
  let num = [];
  while (num.length < 6) {
    let pick = Math.floor(Math.random() * 45 + 1);
    if (!num.includes(pick)) {
      num.push(pick);
    }
  }
  console.log(num);
  return num;
}

lotto();
