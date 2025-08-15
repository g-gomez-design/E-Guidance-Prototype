import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Report from './Report'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Report />
  </StrictMode>,
)
