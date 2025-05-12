import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorHandling from './errorHandling.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < ErrorHandling/>
  </StrictMode>,
)
