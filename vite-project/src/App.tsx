import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddToDo';
import TodoList from './components/ToDoList';

type Todo = {
  id: number;
  text: string;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos); // Only set if it's a valid array
        }
      } catch (error) {
        console.error('Failed to parse todos from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {

      localStorage.removeItem('todos');
    }
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-100 font-montserrat">
      <h1 className="text-4xl font-comfortaa font-bold mb-8 text-gray-800">TODO LIST</h1>
      <AddTodo onAdd={addTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={deleteTodo} />
      ) : (
        <p className="text-gray-500 mt-4"></p>
      )}
    </div>
  );
};

export default App;
