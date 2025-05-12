import React from 'react'
import { useState , useEffect} from 'react'

export default function App() {
    const [count , setCount] = useState(0);
   

        function countFunInc(){
            setCount(()=>count+1)
        }
        function countFuncDec(){
            setCount(()=>count-1)
        }
        
  return (
    
    <div className='mx-auto align-middle ml-20 mt-20'>
        <h1 className='text-xl p-5'>Counter:{count}</h1>
        <button className='btn bg-blue-500 rounded p-3' onClick={countFunInc}>Increment </button>
        <button className='btn bg-red-600 rounded p-3' onClick={countFuncDec}>Decrement</button>
    </div>
  )
}
