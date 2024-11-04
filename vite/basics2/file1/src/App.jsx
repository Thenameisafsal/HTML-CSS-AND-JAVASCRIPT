import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>vite with tailwind</h1>
      <Card name="hey bub!">Hello</Card>
      {/* pass the props parameter */}
    </>
  )
}

export default App