import { stopExecution } from "../utilis/stopExecution";

export async function bubbleSort(
  array,
  setArray,
  setMarkedIdx,
  abortController,
  delay
) {
  const copyArray = [...array];
  for (let i = 0; i < copyArray.length - 1; i++) {
    for (let j = 0; j < copyArray.length - 1 - i; j++) {
      const next = copyArray[j + 1];
      const curr = copyArray[j];
      if (curr > next) {
        copyArray[j] = next;
        copyArray[j + 1] = curr;
      }
      //visualize
      if (abortController.current) return;
      setArray(copyArray);
      setMarkedIdx([j + 1]);
      await stopExecution(delay);
    }
  }
  return copyArray;
}
