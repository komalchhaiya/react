import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Counter: {count}</h1>
      <button
    className="bg-green-500 text-white px-4 py-2 rounded mx-2"
    onClick={() => dispatch({ type: 'INCREMENT' })} >Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mx-2"
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Decrement
      </button>
    </div>
  );
}
