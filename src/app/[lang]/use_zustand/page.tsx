
 "use client"

import { create } from 'zustand';
import { persist, createJSONStorage, combine } from 'zustand/middleware';
import usePersistStore from '../utils/usePersisten';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
}));

const useCountStore = create(
    persist<StoreState>(
        (set) => ({
            count: 0,
            increment: () => set((state) => ({ count: state.count + 1 })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
        }),
        {
            name: 'count-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default function UseZustandPage() {
//   const { count, increment, decrement } = useStore((state) => state); // Access increment from the store

    const store = usePersistStore(useCountStore, (state) => state)

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1>
        Counter <span>{store?.count}</span>
      </h1>

      <div className="flex gap-2">
         <button onClick={store?.increment} className="border border-white p-1.5 font-medium rounded-md">
          Increase
        </button> 
        <button onClick={store?.decrement} className="border border-white p-1.5 font-medium rounded-md">
          Decrease
        </button>
      </div>
    </main>
  );
}
