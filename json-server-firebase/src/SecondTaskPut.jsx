import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(null);

  // Fetch all users once when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/users')
      .then(response => setUsers(response.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // UPDATE user with PUT
      axios.put(`http://localhost:5000/users/${id}`, { name, email }).then(() => {
        fetchUsers();
        resetForm();
      });
    } else {
      // ADD new user with POST
      axios.post('http://localhost:5000/users', { name, email }).then(() => {
        fetchUsers();
        resetForm();
      });
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setId(null);
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setId(user.id);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Update User' : 'Add User'}</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-x-4">
        <input
          type="text"
          placeholder="Name"
          className="border px-2 py-1"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border px-2 py-1"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          {id ? 'Update' : 'Add'}
        </button>
        {id && (
          <button type="button" className="ml-2 text-red-500" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleEdit(user)} className="text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
