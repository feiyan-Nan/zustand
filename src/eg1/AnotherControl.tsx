import {shallow} from "zustand/shallow";
import {useWhyDidYouUpdate} from "ahooks";
import {useStore} from "./useStore.ts";
import {toUpper} from "lodash";

const common = (state) => ({ name: toUpper(state.name)})

function AnotherControl() {
  const {name} = useStore(common, shallow);
  const inc = useStore((state) => state.inc);
  // const name = useStore((state) => state.name);
  // const { inc, name } = useStore();
  console.log('AnotherControl', name);
  useWhyDidYouUpdate('AnotherControl', {inc});
  return <button onClick={inc}> +1 </button>;
}
export default AnotherControl;
