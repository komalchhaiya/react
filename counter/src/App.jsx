import React , {useState} from 'react'

export default function App() {
  const [count , setCount] = useState(0);
  return (
    <div className='mx-auto'>
      <div className='m-90 ml-140'>
        <h1 className='text-2xl p-auto '>Counter:{count}</h1>
      <button className='w-30 h-10 mx-auto my-auto bg-blue-400 rounded mt-5' onClick={()=>setCount(count+1)}>Click Here</button>
      </div>
    </div>
  )
}
