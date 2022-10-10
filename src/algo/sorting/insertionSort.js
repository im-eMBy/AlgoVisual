export async function insertionSort(array, runController, visualize) {
  const copyArray = [...array];
  for (let i = 1; i < copyArray.length; i++) {
    let curr = copyArray[i];
    for (let j = i - 1; j >= 0; j--) {
      let prev = copyArray[j];
      if (curr >= prev) break;
      copyArray[j + 1] = copyArray[j];
      copyArray[j] = curr;
      //visualize
      if (!runController.isOn) return;
      await visualize(copyArray, [i, j]);
    }
  }
  return copyArray;
}
