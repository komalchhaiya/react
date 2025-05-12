// src/components/TodoList.jsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from './atoms';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useRecoilValue(todoListState);

  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem key={index} item={todo} index={index} />
        ))
      )}
    </div>
  );
}
