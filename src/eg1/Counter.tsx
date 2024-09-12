import {useStore} from "./useStore.ts";


function Counter() {
  const { count } = useStore();
  return <h1>{count}</h1>;
}
export default Counter;
