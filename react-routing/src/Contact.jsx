import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
        <p className='text-xl'>Email: komalchhaiya@gmail.com  </p>
        <p className='text-xl'>Phone: +91 9081716130  </p>            
    </div>
    </div>
  )
}
