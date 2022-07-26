export function arraySwap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
