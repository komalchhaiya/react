import React, { useState, useEffect } from 'react';

import { db } from './Firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const usersRef = collection(db, 'users');

  const fetchUsers = async () => {
    const data = await getDocs(usersRef);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async () => {
    await addDoc(usersRef, { name });
    setName('');
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'users', id));
    fetchUsers();
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="New user name" />
      <button onClick={handleAdd}>Add User</button>

      <ul>
        {users.map(u => (
      <li key={u.id}>
      {u.name} <button onClick={() => handleDelete(u.id)}>Delete</button>          </li>
        ))}
      </ul>
    </div>
  );
}
