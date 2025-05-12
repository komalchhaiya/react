import React, { useState } from 'react'

export default function App2() {
    const [isLogIn , setIsLoggedIn]=useState(false);
    function handleLogin(){
        setIsLoggedIn(true)
    }
    function logOut(){
        setIsLoggedIn(false)
    }
  return (
    <div className='p-5'>
        {
            isLogIn ? (
                <div>
                <h2>welcome!!</h2>
                <button onClick={logOut} className='bg-blue-500 text-white p-3'>
                logout
                </button>
                </div>
            ) : (<div>
                <h2>Please Log-In</h2>
                <button onClick={handleLogin} className='bg-red-500 text-white p-3'>
                    log-in
                </button>
                </div>)
        }
      
    </div>
  )
}
