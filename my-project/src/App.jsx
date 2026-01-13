 
import './App.css'
import Card from './Card'
function App() {
    

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 justify-center-safe rounded-2xl mb-3'>Tailwind CSS</h1>
      <Card username="Amaan"  btnText="click me"/>
      <Card username="Ali btb" btnText = "read me"/>
      <Card username="zeshan" btnText='read'/>
    </>
  )
}

export default App
