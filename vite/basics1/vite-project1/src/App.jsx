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
    method(value+1)
    method(value+1) // here the value is updated only once although you call it 3 times.
    // if the same method is called multiple times here, it will not increment the value multiple times, it is because of the consolidation effect of the react
    // to avoid the problem, we can use callbacks -> these will surely increment the value
    method((preValue) => {preValue+1})
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
