import { useStore } from './Eg1';

function Control() {
  return (
    <button
      onClick={() => {
        useStore.setState((s) => ({ count: s.count - 5 }));
      }}
    >
      －5
    </button>
  );
}
export default Control;
