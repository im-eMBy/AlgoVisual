import { stopExecution } from "../../utilis/stopExecution";
import { arraySwap } from "../../utilis/arraySwap";

export async function quickSort(
  array,
  setArray,
  setMarkedIdx,
  shouldRun,
  delay
) {
  await quickSortRecursion(
    array,
    0,
    array.length - 1,
    setArray,
    setMarkedIdx,
    shouldRun,
    delay
  );
  return array;
}
async function quickSortRecursion(
  array,
  start,
  stop,
  setArray,
  setMarkedIdx,
  shouldRun,
  delay
) {
  if (start >= stop) return;
  if (!shouldRun.current) return;
  const pivot = array[start];
  let leftIdx = start + 1;
  let rightIdx = stop;
  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > pivot && array[rightIdx] < pivot)
      arraySwap(leftIdx, rightIdx, array);
    if (array[leftIdx] <= pivot) leftIdx++;
    if (array[rightIdx] >= pivot) rightIdx--;
    //visualize
    if (!shouldRun.current) return;
    setArray([...array]);
    setMarkedIdx([start, leftIdx, rightIdx]);
    await stopExecution(delay);
  }
  arraySwap(start, rightIdx, array);
  await quickSortRecursion(
    array,
    start,
    rightIdx - 1,
    setArray,
    setMarkedIdx,
    shouldRun,
    delay
  );
  await quickSortRecursion(
    array,
    rightIdx + 1,
    stop,
    setArray,
    setMarkedIdx,
    shouldRun,
    delay
  );
}
