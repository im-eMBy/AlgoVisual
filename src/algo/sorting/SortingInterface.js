import { radixSort } from "./radixSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";
import { quickSort } from "./quickSort";
import { bubbleSort } from "./bubbleSort";
import { mergeSort } from "./mergeSort";
import { shellSort } from "./shellSort";

const SORT_FUNC_MAP = {
  insertion: insertionSort,
  bubble: bubbleSort,
  radix: radixSort,
  selection: selectionSort,
  quick: quickSort,
  merge: mergeSort,
  shell: shellSort,
};

export class SortingInterface {
  initialArray;
  delay;
  setArray;
  setMarkedIdx;
  runController;
  sortingFunction;
  constructor(array, setArray, setMarkedIdx, delay, functionName) {
    this.initialArray = array;
    this.delay = delay;
    this.setArray = setArray;
    this.setMarkedIdx = setMarkedIdx;
    this.sortingFunction = SORT_FUNC_MAP[functionName];
    this.runController = {
      isOn: false,
      abort() {
        this.isOn = false;
      },
    };
  }
  stop() {
    this.runController.abort();
  }
  async start() {
    this.runController.isOn = true;
    if (!this.sortingFunction) {
      return;
    }
    await this.sortingFunction(
      this.initialArray,
      this.runController,
      this.visualize
    );
  }
  visualize = async (array, markedArray) => {
    this.setArray([...array]);
    this.setMarkedIdx(markedArray);
    await this.stopExecution(this.delay);
  };
  stopExecution = async (time) => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, time);
    });
  };
  setInitialArray(array) {
    this.initialArray = array;
  }
  setDelay(delay) {
    this.delay = delay;
  }
}
