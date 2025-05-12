
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './CounterSlice.jsx';

export default function UseSelector() {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();

  return (
    <div className="flex flex-col  items-center  ">
      <h2 className="text-4xl font-semibold text-gray-700 mb-4">Counter: {count}</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())} className="bg-blue-500 text-white
            py-2 px-4 rounded-lg " >Increment </button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg "> Decrement
         </button>
       </div>
        </div>
  );
}
