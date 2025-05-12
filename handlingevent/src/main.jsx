import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SecondQue from './SecondQue.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SecondQue />
    {/* <App /> */}
  </StrictMode>,
)
