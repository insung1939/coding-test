function solution(answers) {
  let std1 = [1, 2, 3, 4, 5];
  let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result1 = [];
  let result2 = [];
  let result3 = [];
  let answer = [];
  const calResult = (std, result) => {
    let index = 0;
    for (let i = 0; i < answers.length; i++) {
      index = i % std.length;
      result.push(std[index]);
    }
    return result.filter((el, index) => el === answers[index]).length;
  };
  const totalScore = [
    calResult(std1, result1),
    calResult(std2, result2),
    calResult(std3, result3),
  ];
  totalScore.map((el, index) =>
    el === Math.max(...totalScore) ? answer.push(index + 1) : answer
  );
  return answer;
}
