import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Practice} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Practice isLoggedIn={false}/>
  </StrictMode>,
)
