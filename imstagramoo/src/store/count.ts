// src/store/count.ts
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  immer(
    combine({ count: 0 }, (set, get) => ({
      actions: {
        increase: () => {
          set((store) => {
            store.count += 1;
          });
        },
        decrease: () => {
          set((store) => {
            store.count -= 1;
          });
        },
      },
    })),
  ),
);

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};
export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};
export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};
