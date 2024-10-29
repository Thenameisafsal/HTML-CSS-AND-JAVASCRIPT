import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function custom(){
  return (
    <div>
      {/* render an element using {} */}
      <h1>this is a custom react file {2+2}</h1>
      {/* {} if you give this here after defining an inline element above, then that will be displayed here */}
    </div>
  )
}
// if it is an element, you can add it directly using the syntax in main, but if it is an object like this, it won't work unless you convert it into an element
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

// so let's convert it now
// the syntax is - 1. type of the element, 2. attributes of the element as an object, 3. the innerhtml
const NewElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    targer : "_blank"
  },
  "click here to visit google",
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,
  // you can call the above function in either ways
  // custom()
  <custom/>


  // just pass it directly, it will accept
  // NewElement
)
