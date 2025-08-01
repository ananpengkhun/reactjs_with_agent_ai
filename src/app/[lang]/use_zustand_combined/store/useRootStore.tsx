// stores/useRootStore.ts
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

// Define interfaces for your individual store states
interface UserState {
  user: { name: string; id: string };
}

interface TodoState {
  todos: string[];
}

interface UserActions {
  setUser: (user: { name: string; id: string }) => void;
}

interface TodoActions {
  addTodo: (todo: string) => void;
  removeTodo: (index: number) => void;
}

// Combine the initial states and actions
export const useRootStore = create(
  combine<UserState & TodoState, UserActions&TodoActions>(
    {
      user: { name: '', id: '' },
      todos: [] ,
    },
    (set, _) => ({
      // User actions
      setUser: (user: { name: string; id: string }) => set({ user }),
      // Todo actions
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (index) =>
        set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
    })
  )
);




