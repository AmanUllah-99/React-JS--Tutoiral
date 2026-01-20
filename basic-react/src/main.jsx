import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 

 import App from './App.jsx'


//  function Custom() {
//   return (
//     <div>
//       <h1>Hello from Custom Component</h1>
//     </div>
//   )
// }


 
  

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <App />
    
  </StrictMode>

)
