import { stopExecution } from "../utilis/stopExecution";

export async function radixSort(
  array,
  setArray,
  setMarkedIdx,
  shouldRun,
  delay
) {
  const digits = getMaxDigitCounter(array);
  let currSorted = [...array];
  let displayArray = [...array];
  //for every digit, i = current digit position from end
  for (let i = 1; i <= digits; i++) {
    const counts = new Array(10).fill(0);
    const partlySorted = new Array(array.length).fill(0);
    //count
    for (let j = 0; j < currSorted.length; j++) {
      const digit = getDigit(currSorted[j], i);
      counts[digit]++;
      //visualize
      if (!shouldRun.current) return;
      setMarkedIdx([j]);
      await stopExecution(delay);
    }
    let acc = 0;
    for (let j = 0; j < counts.length; j++) {
      acc += counts[j];
      counts[j] = acc - 1;
    }
    //sort for current digit
    for (let j = currSorted.length - 1; j >= 0; j--) {
      const digit = getDigit(currSorted[j], i);
      const number = currSorted[j];
      const index = counts[digit];
      partlySorted[index] = number;
      counts[digit]--;
      //visualize
      if (!shouldRun.current) return;
      displayArray[index] = number;
      setArray(displayArray);
      setMarkedIdx([j, index]);
      await stopExecution(delay);
    }
    currSorted = [...partlySorted];
  }
  return currSorted;
}
function getDigit(number, pos) {
  let res = number % Math.pow(10, pos);
  res -= number % Math.pow(10, pos - 1);
  res /= Math.pow(10, pos - 1);
  return res;
}
function getMaxDigitCounter(array) {
  const maxInt = Math.max(...array);
  return Math.floor(Math.log10(maxInt)) + 1;
}
