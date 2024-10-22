import React from 'react';

type TodoCardProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 mb-2 border-b  transition-all ${
        completed ? 'bg-green-100 line-through' : 'bg-white'
      }`}
    >
      <span
        className={`cursor-pointer flex-1 ${
          completed ? 'text-gray-500' : 'text-black'
        }`}
        onClick={() => onToggle(id)}
      >
        {text}
      </span>
      <button
        onClick={() => onDelete(id)}
        className=" text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
