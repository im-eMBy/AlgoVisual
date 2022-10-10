import { arraySwap } from "../../utilis/arraySwap";

export async function shellSort(array, runController, visualize) {
  const copyArray = [...array];
  let interval = Math.floor(array.length / 2);
  while (interval > 0) {
    for (let i = interval; i < copyArray.length; i++) {
      const el = copyArray[i];
      let elIdx = i;
      let el2Idx = i - interval;
      //visualize
      if (!runController.isOn) return;
      await visualize(copyArray, [elIdx, el2Idx]);
      while (el < copyArray[el2Idx]) {
        arraySwap(elIdx, el2Idx, copyArray);
        elIdx -= interval;
        el2Idx -= interval;
        //visualize
        if (!runController.isOn) return;
        await visualize(copyArray, [elIdx, el2Idx]);
      }
    }
    interval = Math.floor(interval / 2);
  }
}
