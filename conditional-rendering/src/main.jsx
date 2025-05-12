import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Task2 from './Task2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Task2 />
  </StrictMode>,
)
