import {React,useState} from 'react'
const App = function(){
  const [value,setValue] = useState(0)
  return (
    <div>
      <h1 id="displayval">Current Value: {value}</h1>
      <button onClick={() => value<3 ? setValue(value+1) : console.log("upper limit has been reached, please reduce the value")}>Press me to increase the value</button>
      <button onClick = {() => {value>0 ? setValue(value-1) : console.log("lower limit reached, please increase the value")}}>Press me to decrease the value</button>
    </div>
  )
}
export default App