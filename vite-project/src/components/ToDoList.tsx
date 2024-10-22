import React from 'react';
import TodoCard from './ToDoCard';

type Todo = {
  id: number;
  text: string;
};

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4">
      {todos.map((todo) => (
        <TodoCard key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
