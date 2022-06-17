function solution(array, commands) {
  let answer = [];
  for (const command of commands) {
    const sliceArr = array.slice(command[0] - 1, command[1]).sort((a, b) => {
      return a - b > 0 ? 1 : -1;
    });
    answer.push(sliceArr[command[2] - 1]);
  }
  return answer;
}
