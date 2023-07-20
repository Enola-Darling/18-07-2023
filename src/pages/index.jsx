import { useContext } from 'react'
import { TodoContext } from '@/state/TodoContext'
import Login from '@/components/login'
import TodoForm from '@/components/todoForm'
import TodoList from '@/components/todoList'


const Home = () => {
  const { todos, addTodo, removeTodo, 
  isLogged,username, logout
   } = useContext(TodoContext);

   const handleLogout = () => {
    logout ();
   }

   return (
    <div>
      {isLogged ? (
        <>
          <h1>Logged as {username}</h1>
          <button onClick={handleLogout}>Logout</button>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} />
        </>
      ) : (
        <Login/>
      )}
    </div>
  );
};

export default Home;


/*export async function getServerSideProps(context) {
  const data = [];

  return {
    props: {
      data,
    },
  };
}*/