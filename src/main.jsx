import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import Report from './Report';
// import Return from './Return';
import StudentLogin from './StudentLogin';
// import StudentHome from './StudentHome';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Report /> */}
    {/* <Return /> */}
    <StudentLogin/>
    {/* <StudentHome/> */}
  </StrictMode>,
)
