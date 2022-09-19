function solution(progresses, speeds) {
  let day = [];
  let answer = [];
  let count = 1;
  progresses.map((progress, index) =>
    day.push(Math.ceil((100 - progress) / speeds[index]))
  );
  let maxDay = day[0];
  for (let i = 0; i < day.length; i++) {
    if (day[i + 1] <= maxDay) {
      count++;
    } else {
      maxDay = day[i + 1];
      answer.push(count);
      count = 1;
    }
  }
  return answer;
}
