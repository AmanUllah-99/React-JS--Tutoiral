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


 const Element =(
  <a href="https://google.com" target ='_blank'>go to google</a>

 );

 const AnotherUser ="Aman"

 const ReactElement =React.createElement(
  'a',
  { href:"https://google.com", target: '_blank'},
  'Go and Explor to Google',<br />,
  AnotherUser

 )

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <App />
    
    <br />
    {ReactElement}

  </StrictMode>

)
