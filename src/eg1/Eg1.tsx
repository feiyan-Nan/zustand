import { useState } from 'react';

import create from 'zustand';
import Control from './Control';
import AnotherControl from './AnotherControl';
import Counter from './Counter';

export const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Eg1() {
  return (
    <>
      <h1>Eg 1</h1>
      <Counter />
      <AnotherControl />
      <Control />
    </>
  );
}

export default Eg1;
