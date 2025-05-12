import React from 'react';

export default function Task2() {
  const users = [{ id: 1, name: 'Komal' }, { id: 2, name: 'Avani' }, { id: 3, name: 'Devangi' },
    { id: 4, name: 'Priyanshi' },
    { id: 5, name: 'Nisha' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">User List:</h2>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.id} >{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
