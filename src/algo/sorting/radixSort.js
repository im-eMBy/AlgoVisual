export async function radixSort(array, runController, visualize) {
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
      if (!runController.isOn) return;
      await visualize(displayArray, [j]);
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
      displayArray[index] = number;
      if (!runController.isOn) return;
      await visualize(displayArray, [j, index]);
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
