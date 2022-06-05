function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort()
      .reverse()
      .map(el => Number(el))
      .join("")
  );
}
