import React, { useState } from 'react';

export default function Task2() {
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setAge(e.target.value);
  }

  function checkEligibility(e) {
    e.preventDefault();
    if (Number(age) >= 18) {
      setMessage('You are eligible to watch');
    } else {
      setMessage('You are Not eligible to vote.');
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto mt-10 ">
      <h2 className="text-xl mb-4 font-semibold">Check Voting Eligibility</h2>
      <form onSubmit={checkEligibility}>
        <input
          type="number"  value={age}
          onChange={handleChange}  placeholder="Enter your age"
        className="border p-2 rounded w-full"
        />
        <button type="submit"
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded" >
          Check
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
