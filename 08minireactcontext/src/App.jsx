 
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextprovider'
 

function App() {
   

  return (
    <UserContextProvider>
       <h1 className='bg-gray-500 text-white p-4 hover:bg-gray-600'>React-context</h1>
        <p className='p-4'>This is a simple example of React context.</p>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App
