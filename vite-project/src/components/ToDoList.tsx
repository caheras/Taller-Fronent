import React from 'react';
import TodoCard from './ToDoCard';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-4">
      {todos
        .slice(0)
        .reverse()
        .map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TodoList;
