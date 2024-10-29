import { useState } from 'react'
import Youtube from './youtube'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
<p>vite</p>       
<p>vite</p>      
<Youtube/>  {/* imported from another jsx, calling the component */}
      </div>
    </>
  )
}

export default App
