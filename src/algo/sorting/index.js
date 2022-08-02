import { radixSort } from "./radixSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";
import { quickSort } from "./quickSort";
import { bubbleSort } from "./bubbleSort";
import { mergeSort } from "./mergeSort";
import { shellSort } from "./shellSort";

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
    case "shell":
      return shellSort;
    default:
      break;
  }
}
