import { createContext, useReducer } from "react";
import { mockTodos } from "@/mocks/mock";

export const TodoContext = createContext();

const initialState = {
  todos: mockTodos,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
          },
        ],
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};