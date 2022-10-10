import { arraySwap } from "../../utilis/arraySwap";

export async function quickSort(array, runController, visualize) {
  await quickSortRecursion(
    array,
    0,
    array.length - 1,
    runController,
    visualize
  );
  //visualize
  await visualize(array, []);
  return array;
}
async function quickSortRecursion(
  array,
  start,
  stop,
  runController,
  visualize
) {
  if (start >= stop) return;
  if (!runController.isOn) return;
  const pivot = array[start];
  let leftIdx = start + 1;
  let rightIdx = stop;
  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > pivot && array[rightIdx] < pivot)
      arraySwap(leftIdx, rightIdx, array);
    if (array[leftIdx] <= pivot) leftIdx++;
    if (array[rightIdx] >= pivot) rightIdx--;
    //visualize
    if (!runController.isOn) return;
    await visualize(array, [start, leftIdx, rightIdx]);
  }
  arraySwap(start, rightIdx, array);
  await quickSortRecursion(
    array,
    start,
    rightIdx - 1,
    runController,
    visualize
  );
  await quickSortRecursion(array, rightIdx + 1, stop, runController, visualize);
}
