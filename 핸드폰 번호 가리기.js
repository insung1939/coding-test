function solution(phone_number) {
  const len = phone_number.length;
  return phone_number.replace(
    phone_number.slice(0, len - 4),
    "*".repeat(len - 4)
  );
}
