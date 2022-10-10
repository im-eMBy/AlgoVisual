export async function mergeSort(array, runController, visualize) {
  const mainArr = [...array];
  const copyArr = [...array];
  const visualArr = [...array];
  await mergeSortRecursion(
    mainArr,
    copyArr,
    0,
    array.length - 1,
    visualArr,
    runController,
    visualize
  );
  await visualize(mainArr, []);
  return mainArr;
}
async function mergeSortRecursion(
  mainArr,
  copyArr,
  start,
  stop,
  visualArr,
  runController,
  visualize
) {
  if (start === stop) return;
  if (!runController.isOn) return;
  const pivot = Math.floor((start + stop) / 2);
  await mergeSortRecursion(
    copyArr,
    mainArr,
    start,
    pivot,
    visualArr,
    runController,
    visualize
  );
  await mergeSortRecursion(
    copyArr,
    mainArr,
    pivot + 1,
    stop,
    visualArr,
    runController,
    visualize
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
    if (!runController.isOn) return;
    await visualize(visualArr, [i, j, k]);
  }
  while (j <= pivot) {
    mainArr[i] = copyArr[j];
    visualArr[i] = copyArr[j];
    j++;
    i++;
    //visualize
    if (!runController.isOn) return;
    await visualize(visualArr, [i, j, k]);
  }
  while (k <= stop) {
    mainArr[i] = copyArr[k];
    visualArr[i] = copyArr[k];
    k++;
    i++;
    //visualize
    if (!runController.isOn) return;
    await visualize(visualArr, [i, j, k]);
  }
}
