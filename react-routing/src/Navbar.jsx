import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
        <ul className='flex gap-10 text-4xl mt-5 justify-center'>
            <Link to='/'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
        </ul>
      
    </div>
  )
}
