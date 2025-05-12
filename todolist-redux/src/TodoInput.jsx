// src/components/TodoInput.jsx
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

export default function TodoInput() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useRecoilState(todoListState);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, isComplete: false }]);
    setInput('');
  };

  return (
    <div className="flex gap-2 p-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full"
        placeholder="Add a task..."
      />
      <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
    </div>
  );
}
