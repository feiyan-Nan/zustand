import { useState } from 'react';
import { create } from 'zustand';
import ZusTandName from './ZusTandName';
import ZusTandAge from './ZusTandAge';

export const useUserStore = create<any>((set, get) => ({
  name: '张三',
  age: 12,
  addAge: (num: number) => set((state: any) => ({ age: get().age + num })),
  // addAge: (num: number) => set((state: any) => ({ age: state.age + num })),
}));

function ZustandExample() {
  return (
    <>
      <div>
        <ZusTandName />
        <ZusTandAge />
      </div>
    </>
  );
}

export default ZustandExample;
