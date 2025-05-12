// src/App.jsx
import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  return (
    <RecoilRoot>
      <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded ">
        <h1 className="text-2xl  text-center">Recoil Todo List</h1>
        <TodoInput />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}
