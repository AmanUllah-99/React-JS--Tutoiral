 
import './App.css'
import VITE_APPWRITE_URL from './conf/conf'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  
 
  return (
    <>
      <h1 className=' bg-gray-500'>Blog App</h1>
    </>
  )
}

export default App
