import { useStore } from './Eg1';

function Counter() {
  const { count } = useStore();
  return <h1>{count}</h1>;
}
export default Counter;
