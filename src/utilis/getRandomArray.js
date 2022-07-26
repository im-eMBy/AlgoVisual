export function getRandomArray(min, max, arrLength) {
  const res = [];
  for (let i = 0; i < arrLength; i++) {
    res.push(getRandomNumber(min, max));
  }
  return res;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
