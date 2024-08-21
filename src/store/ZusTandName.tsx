import { useState } from 'react';
import { useUserStore } from './ZustandExample';

function ZusTandName() {
  const name = useUserStore((state) => state.name);
  // const {name} = useUserStore()
  console.log('ZusTandName');

  return (
    <>
      <div>{name}</div>
      <button
        onClick={() => {
          useUserStore.setState((state) => ({
            age: state.age - 5,
          }));
        }}
      >
        在Name中更改
      </button>
    </>
  );
}

export default ZusTandName;
