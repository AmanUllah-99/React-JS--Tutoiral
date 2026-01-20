import React from 'react'
import {ThemeContextProvider } from './contexts/ThemeContext'
import { useState, useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {

    setThemeMode("light")

  }
  const darkMode = () => {

    setThemeMode("dark")

  }
  /////// actual theme change
  useEffect(() => {
    const changeTheme = document.querySelector('html')

    changeTheme.classList.remove("light", "dark")

    changeTheme.classList.add(themeMode)
  }, [themeMode])


  return (

    <ThemeContextProvider value={{ themeMode, lightMode, darkMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Btn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>


  )
}

export default App