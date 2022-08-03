import { stopExecution } from "../../utilis/stopExecution";
import { arraySwap } from "../../utilis/arraySwap";

export async function shellSort(
  array,
  setArray,
  setMarkedIdx,
  shouldRun,
  delay
) {
  const copyArray = [...array];
  let interval = Math.floor(array.length / 2);
  while (interval > 0) {
    for (let i = interval; i < copyArray.length; i++) {
      const el = copyArray[i];
      let elIdx = i;
      let el2Idx = i - interval;
      //visualize
      if (!shouldRun.current) return;
      setArray([...copyArray]);
      setMarkedIdx([elIdx, el2Idx]);
      await stopExecution(delay);
      while (el < copyArray[el2Idx]) {
        arraySwap(elIdx, el2Idx, copyArray);
        elIdx -= interval;
        el2Idx -= interval;
        //visualize
        if (!shouldRun.current) return;
        setArray(copyArray);
        setMarkedIdx([elIdx, el2Idx]);
        await stopExecution(delay);
      }
    }
    interval = Math.floor(interval / 2);
  }
}
