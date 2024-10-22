import React from 'react';

type TodoCardProps = {
  id: number;
  text: string;
  onDelete: (id: number) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ id, text, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 border-b bg-white">
      {/* Add break-words to the text element */}
      <span className="flex-1 text-gray-900 break-all">{text}</span>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
