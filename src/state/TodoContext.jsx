import { createContext, useReducer } from "react";
import { mockTodos } from "@/mocks/mock";

export const TodoContext = createContext();

const initialState = {
  todos: mockTodos,
  isLogged: false,
  username: '',
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
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'SET_LOGIN':
        return{
          ...state,
          isLogged: true,
        };
        case 'SET_LOGOUT':
          return{
            ...state,
            isLogged: false,
            username:'',
          };
          case 'SET_USERNAME':
            return{
              ...state,
              username: action.payload,
            }
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
  
  const login = (username) => {
    dispatch({ type: 'SET_LOGIN'});
    dispatch({type:'SET_USERNAME', payload: username});
  };

  const logout =() => {
    dispatch ({type: 'SET_LOGOUT'});
  };

  return (
    <TodoContext.Provider value={{ todos: state.todos, addTodo, removeTodo, 
    isLogged: state.isLogged, username: state.username,
    login, logout,}}>
      {children} 
    </TodoContext.Provider>
  );
};