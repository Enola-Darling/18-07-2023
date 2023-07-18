import { useContext } from 'react'
import { TodoContext, TodoProvider } from '@/state/TodoContext'

import TodoForm from '@/components/todoForm'
import TodoList from '@/components/todoList'


const Home = () => {
  const { todos, addTodo, removeTodo } = useContext(TodoContext);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

const HomePage = () => {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
};

export default HomePage;