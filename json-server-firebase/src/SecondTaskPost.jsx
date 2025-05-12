import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SecondTaskPost() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/users').then(res => setUsers(res.data))
  }, [])

  function addUser(e) {
    e.preventDefault()
    axios.post('http://localhost:5000/users', { name, email }).then(() => {
      axios.get('http://localhost:5000/users').then(res => setUsers(res.data))
      setName('')
      setEmail('')
    })
  }

  return (
    <div className='p-4 justify-center items-center mx-auto mt-14 rounded-2xl flex flex-col bg-gray-100 w-120 h-128 '> 
      <h2 className='text-2xl '>Add User</h2>
      <form onSubmit={addUser} className='flex flex-col gap-4'>
        <input type="text" placeholder="Name" className='pl-2 border-2 w-70 mt-3' value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" className='pl-2 border-2 w-70' value={email} onChange={e => setEmail(e.target.value)} />
        <button type="submit" className='bg-gray-700 w-14 ml-14 text-white rounded'>Add</button>
      </form>

      <h3 className='mt-8 text-2xl text-center '>User List</h3>
      <ul className='gap-4 mt-4 border-2 p-5'> 
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}
