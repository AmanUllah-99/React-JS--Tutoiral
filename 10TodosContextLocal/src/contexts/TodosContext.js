import { createContext, useContext } from "react";


export const TodoContext = createContext({
   todos: [
      {
         id: 1,
         todo: "todos msg",
         completed: false,
      }
   ],

   addTodo: (todo) => { },
   updateTodo: (id, todo) => { },
   deleteTodo: (id) => { },
   completeToggle: (id) => { },

})




export const TodoProvider = TodoContext.Provider

export function useTodo() {
   return (
      useContext(TodoContext)
   )

}