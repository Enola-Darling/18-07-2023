import React from 'react';
import styles from './TodoItem.module.scss';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li className={styles.item}>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;