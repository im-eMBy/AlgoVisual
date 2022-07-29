import { stopExecution } from "../utilis/stopExecution";

export async function insertionSort(
  array,
  setArray,
  setMarkedIdx,
  shouldRun,
  delay
) {
  const copyArray = [...array];
  for (let i = 1; i < copyArray.length; i++) {
    let curr = copyArray[i];
    for (let j = i - 1; j >= 0; j--) {
      let prev = copyArray[j];
      if (curr >= prev) break;
      copyArray[j + 1] = copyArray[j];
      copyArray[j] = curr;
      //visualize
      if (!shouldRun.current) return;
      setArray(copyArray);
      setMarkedIdx([i, j]);
      await stopExecution(delay);
    }
  }
  return copyArray;
}
