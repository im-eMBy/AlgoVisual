import { stopExecution } from "../utilis/stopExecution";

export async function mergeSort(
  array,
  setArray,
  setMarkedIdx,
  abortController,
  delay
) {
  const mainArr = [...array];
  const copyArr = [...array];
  const visualArr = [...array];
  await mergeSortRecursion(
    mainArr,
    copyArr,
    0,
    array.length - 1,
    visualArr,
    setArray,
    setMarkedIdx,
    abortController,
    delay
  );
  setArray(mainArr);
  return mainArr;
}
async function mergeSortRecursion(
  mainArr,
  copyArr,
  start,
  stop,
  visualArr,
  setArray,
  setMarkedIdx,
  abortController,
  delay
) {
  if (start === stop) return;
  if (abortController.current) return;
  const pivot = Math.floor((start + stop) / 2);
  await mergeSortRecursion(
    copyArr,
    mainArr,
    start,
    pivot,
    visualArr,
    setArray,
    setMarkedIdx,
    abortController,
    delay
  );
  await mergeSortRecursion(
    copyArr,
    mainArr,
    pivot + 1,
    stop,
    visualArr,
    setArray,
    setMarkedIdx,
    abortController,
    delay
  );
  let i = start;
  let j = start;
  let k = pivot + 1;
  while (j <= pivot && k <= stop) {
    if (copyArr[j] < copyArr[k]) {
      mainArr[i] = copyArr[j];
      visualArr[i] = copyArr[j];
      j++;
    } else {
      mainArr[i] = copyArr[k];
      visualArr[i] = copyArr[k];
      k++;
    }
    i++;
    //visualize
    if (abortController.current) return;
    setArray([...visualArr]);
    setMarkedIdx([i, j, k]);
    await stopExecution(delay);
  }
  while (j <= pivot) {
    mainArr[i] = copyArr[j];
    visualArr[i] = copyArr[j];
    j++;
    i++;
    //visualize
    if (abortController.current) return;
    setArray([...visualArr]);
    setMarkedIdx([i, j, k]);
    await stopExecution(delay);
  }
  while (k <= stop) {
    mainArr[i] = copyArr[k];
    visualArr[i] = copyArr[k];
    k++;
    i++;
    //visualize
    if (abortController.current) return;
    setArray([...visualArr]);
    setMarkedIdx([i, j, k]);
    await stopExecution(delay);
  }
}
