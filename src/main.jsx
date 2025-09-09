import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


//*Login page*//

// import Login from './Log-in';

// Homepage

import { Homepage } from './Homepage';

//*Student view*//

// import StudentReport from './StudentReport';
// import StudentReturn from './StudentReturn';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login/> */}
    {/* <StudentReport/> */}
    {/* <StudentReturn/> */}
    <Homepage/>
  </StrictMode>,
)
