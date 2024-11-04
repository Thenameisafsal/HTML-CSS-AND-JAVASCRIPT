import { useState } from 'react'
import './App.css'

function App() {
  const [color,setter] = useState('white');
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flew-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => {setter("red")}} style={{backgroundColor:'red'}}>RED</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => {setter("green")}} style={{backgroundColor:'green'}}>GREEN</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={() => {setter("blue")}} style={{backgroundColor:'blue'}}>BLUE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
