const rolls = [10, 10, 10, 10, 5, 4, 3, 6, 7, 0, 8, 1, 10, 7, 1];
function Bowling(rolls) {
  let score = 0;
  let round = 0;
  for (let i = 0; i < rolls.length; i++) {
    round++;
    if (round === 11) break;
    if (rolls[i] === 10) {
      score += 10 + rolls[i + 1] + rolls[i + 2];
    } else if (rolls[i] + rolls[i + 1] === 10) {
      score += 10 + rolls[i + 1];
      i++;
    } else {
      score += rolls[i] + rolls[i + 1];
      i++;
    }
  }
  return score;
}
console.log(Bowling(rolls));
