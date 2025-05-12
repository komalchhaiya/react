import React, { useState } from 'react';

export default function SecondQue() {
  const [input, setInput] = useState('');

  function Eventhandling(e) {
    setInput(e.target.value);
  }

  return (
    <div className='w-full h-full mt-32 p-4'>
      <form>
        <input  type='text' placeholder='Enter Here Something:' className='mt-3 p-2 border rounded'
          value={input}
          onChange={Eventhandling}
        />
      </form>
      <p className='mt-4'>The Text is: {input}</p>
    </div>
  );
}
