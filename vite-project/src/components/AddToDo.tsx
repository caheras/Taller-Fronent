import React, { useState } from 'react';

type AddTodoProps = {
  onAdd: (text: string) => void;
};

const AddToDo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex w-full max-w-lg mb-6 space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border font-montserrat border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 break-words"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-6 py-2 m-0 rounded-md hover:bg-blue-600 transition-colors shadow-md"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddToDo;
