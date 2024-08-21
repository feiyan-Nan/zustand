import { useStore } from './Eg1';

function AnotherControl() {
  const inc = useStore((state) => state.inc);
  // const { inc } = useStore();
  console.log('AnotherControl');
  return <button onClick={inc}> +1 </button>;
}
export default AnotherControl;
