import { radixSort } from "../algo/radixSort";
import { insertionSort } from "../algo/insertionSort";
import { selectionSort } from "../algo/selectionSort";
import { quickSort } from "../algo/quickSort";
import { bubbleSort } from "../algo/bubbleSort";
import { mergeSort } from "../algo/mergeSort";

export function getSortingFunc(algoName) {
  switch (algoName) {
    case "insertion":
      return insertionSort;
    case "bubble":
      return bubbleSort;
    case "radix":
      return radixSort;
    case "selection":
      return selectionSort;
    case "quick":
      return quickSort;
    case "merge":
      return mergeSort;
    default:
      break;
  }
}
