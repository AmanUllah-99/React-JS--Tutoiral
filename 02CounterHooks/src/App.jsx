import { useState } from 'react'
import './App.css'

function App() {
   let  [counter ,setCounter]= useState(15)

  
   const addValue = () => {
    if (counter < 50) {
      setCounter(prev => prev + 1)
    }
  }
  

   const addRemove = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1)
    }
  }

  return (
    <>
       <h1>Chai aur code</h1>
       <h1>Counter:{counter}</h1>
       <button onClick={addValue}

       >add value{counter}</button>
       <br />
       <button onClick={addRemove}
       >remove value{counter}</button>

       <p>footer:{counter}</p>

    </>
  )
}

export default App
