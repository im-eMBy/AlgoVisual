import { radixSort } from "../algo/radixSort";
import { insertionSort } from "../algo/insertionSort";
import { selectionSort } from "../algo/selectionSort";
import { quickSort } from "../algo/quickSort";

export function getSortingFunc(algoName) {
  switch (algoName) {
    case "insertion":
      return insertionSort;
    case "radix":
      return radixSort;
    case "selection":
      return selectionSort;
    case "quick":
      return quickSort;
    default:
      break;
  }
}
