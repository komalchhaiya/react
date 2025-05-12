// src/components/TodoItem.jsx
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

export default function TodoItem({ item, index }) {
  const [todos, setTodos] = useRecoilState(todoListState);

  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span
        onClick={toggleComplete}
        className={`cursor-pointer ${item.isComplete ? 'line-through text-gray-500' : ''}`}
      >
        {item.text}
      </span>
      <button onClick={deleteTodo} className="bg-red-400 text-white px-2 py-1 rounded">Delete</button>
    </div>
  );
}
