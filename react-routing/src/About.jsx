import React from 'react'
import Navbar from './Navbar'

export default function About() {
  return (
    <div>
        <Navbar/>
         <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to our website! We are dedicated to providing the best service and products.
          Our team is committed to delivering excellence and ensuring customer satisfaction. 
          Stay connected with us for the latest updates.
        </p>
      </div>
    </div>
      
    </div>
  )
}
