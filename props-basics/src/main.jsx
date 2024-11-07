import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="Afsal" contactNo="9361360847" about="a good boy" end="bye bub!"/>
    <App name="Mugesh" contactNo="9361360847" about="a good boy" end="bye bub!"/>
    <App name="Rahul" contactNo="9361360847" about="a good boy" end="bye bub!"/>
    <App name="Soorya" contactNo="9361360847" about="a good boy" end="bye bub!"/>
  </StrictMode>,
)
