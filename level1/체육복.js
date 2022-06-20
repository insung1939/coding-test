function solution(n, lost, reserve) {
  let student = new Array(n).fill(1);
  for (let i = 0; i < student.length; i++) {
    if (reserve.includes(i + 1) && lost.includes(i + 1)) {
      student[i] = 1;
    } else if (lost.includes(i + 1)) {
      student[i] -= 1;
    } else if (reserve.includes(i + 1)) {
      student[i] += 1;
    }
  }

  for (let i = 0; i < student.length; i++) {
    if (student[i] == 0 && student[i + 1] === 2) {
      student[i] += 1;
      student[i + 1] -= 1;
    }
    if (student[i] === 2 && student[i + 1] === 0) {
      student[i] -= 1;
      student[i + 1] += 1;
    }
  }
  return student.filter(el => el >= 1).length;
}
