import { useEffect } from "react"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { useState } from "react"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"



function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme =()=>{
  setThemeMode("light")
  }
  const darkTheme =()=>{
    setThemeMode("dark")

  }

  /////// Actual theme change
  useEffect(() => {
    const ChangeTheme = document.querySelector('html')
    ChangeTheme.classList.remove("light", "dark")
    ChangeTheme.classList.add(themeMode)
   
  }, [themeMode])
  


  return (

    < ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        {/* /////////////theme Btn/ */}
        <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* ////// card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
