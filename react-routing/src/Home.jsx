import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
           <Navbar />
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
     
        <h1 className='text-3xl font-bold mb-4'>Welcome to My App</h1>
      <h1 className='text-3xl font-bold '>This is Home Page</h1>
    </div>
    </div>
  )
}
