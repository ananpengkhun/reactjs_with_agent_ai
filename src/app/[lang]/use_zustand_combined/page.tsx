"use client"

import { useRootStore } from "./store/useRootStore";

// export default function UseZustandCombinedPage() {

//     const user = useRootStore((state) => state.user);
//   const setUser = useRootStore((state) => state.setUser);
//   return (
//     <div>
//       <h2>User: {user.name}</h2>
//       <button onClick={() => setUser({ name: 'John Doe', id: '123' })}>
//         Set User
//       </button>
//     </div>
//   );
// }

export default function TodoList() {
  const todos = useRootStore((state) => state.todos);
  const addTodo = useRootStore((state) => state.addTodo);
  const removeTodo = useRootStore((state) => state.removeTodo);

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={() => addTodo(`New Todo ${todos.length + 1}`)}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}