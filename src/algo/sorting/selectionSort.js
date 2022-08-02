import { stopExecution } from "../../utilis/stopExecution";

export async function selectionSort(
  array,
  setArray,
  setMarkedIdx,
  shouldRun,
  delay
) {
  const copyArray = [...array];
  for (let i = 0; i < copyArray.length - 1; i++) {
    let min = copyArray[i];
    let minIndex = i;
    for (let j = i + 1; j < copyArray.length; j++) {
      if (copyArray[j] < min) {
        min = copyArray[j];
        minIndex = j;
      }
      //visualize
      if (!shouldRun.current) return;
      setArray(copyArray);
      setMarkedIdx([i, j, minIndex]);
      await stopExecution(delay);
    }
    copyArray[minIndex] = copyArray[i];
    copyArray[i] = min;
    //visualize
    if (!shouldRun.current) return;
    setArray(copyArray);
    setMarkedIdx([i]);
    await stopExecution(delay);
  }
  return copyArray;
}
