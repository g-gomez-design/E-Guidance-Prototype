import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import Report from './Report';
import Return from './Return';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Report />  */}
    <Return />
  </StrictMode>,
)
