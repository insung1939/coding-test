function solution(lottos, win_nums) {
  let count = 0;
  let zeroCount = 0;
  lottos.map(el => {
    win_nums.includes(el) ? count++ : count, el === 0 ? zeroCount++ : zeroCount;
  });
  const rankCal = num => {
    switch (num) {
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      case 6:
        return 1;
      default:
        return 6;
    }
  };
  let answer = [];
  answer.push(rankCal(count + zeroCount));
  answer.push(rankCal(count));
  return answer;
}
