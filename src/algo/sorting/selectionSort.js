export async function selectionSort(array, runController, visualize) {
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
      if (!runController.isOn) return;
      await visualize(copyArray, [i, j, minIndex]);
    }
    copyArray[minIndex] = copyArray[i];
    copyArray[i] = min;
    //visualize
    if (!runController.isOn) return;
    await visualize(copyArray, [i]);
  }
  return copyArray;
}
