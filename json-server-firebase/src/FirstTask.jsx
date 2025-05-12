import React, { useState } from 'react'
import axios from 'axios';

export default function FirstTask() {
    const [users , setUsers] = useState([]);
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        setUsers(response.data); 
    });
  return (
    <div>
         <div className="p-4">
    <h2 className="text-2xl font-bold ">User List</h2>
  <table className="table-auto border-collapse border mt-4 border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100">
          <th className="border px-4 py-2">ID</th>
         <th className="border px-4 py-2">Name</th>
        <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
          <tr key={user.id} className="text-center">
      <td className="border px-4 py-2">{user.id}</td>
     <td className="border px-4 py-2">{user.name}</td>
     <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  )
}
