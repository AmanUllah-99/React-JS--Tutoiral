
import './App.css'
import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodosContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  const [todos, setTodos] = useState(() => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
});

  


  const addTodo = (todo)=>{
setTodos((prev) => [{ id: Date.now(), ...todo }, ...(prev || [])]);

  }

  const updateTodo = (id ,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo))

  }

  const deleteTodo = (id)=>{
    setTodos((prev )=> prev.filter((todo) => todo.id !== id))
  }

  const completeToggle = (id)=>{
    setTodos ( (prev ) => prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }

////Do NOT use setState inside useEffect to read from localStorage.
///////Instead, initialize state directly from localStorage.
  
//    useEffect(() => {
//   const todos = JSON.parse(localStorage.getItem("todos"));
//   if (todos && todos.length > 0) {
//      setTodos (todos)
//   }
// }, []);



 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);







  return (
    <TodoProvider value={{todos , addTodo ,updateTodo , deleteTodo ,completeToggle}}>
      <div className="bg-[#172842] h-screen w-screen ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Daily Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
              {(todos || []).map((todo)=>( // Added `|| []` to ensure todos is an array
            <div key={todo.id} className='w-full'>
              <TodoItem todo ={todo}/>
            </div>
          ))}
          </div>
        </div>
      </div>

    </TodoProvider>

  )
}

export default App
