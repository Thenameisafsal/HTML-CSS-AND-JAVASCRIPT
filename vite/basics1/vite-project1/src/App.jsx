import { useState } from 'react'
function App() {
  // let counter = 15
  // since the value will not be updated in real time
  // use usestate for state-based rerendering, we use the usestate which is a hook
  const [value,method] = useState(15) // give the start value here
  const increment = () => {
    // counter+=1
    // console.log(counter)
    method(value+1)
    console.log(value);
    
  }
  const decrement = () => {
    method(value-1)
    console.log(value)
  }
  return (
    <>
      <h1>Afsal {value}</h1> 
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </>
  )
}

export default App
