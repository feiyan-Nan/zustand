import {create} from "zustand";
import {shallow} from "zustand/shallow";

export const useStore = create((set) => ({
  name: '李四',
  count: 1,
  inc: () => set((state) => ({count: state.count + 1})),
}));


