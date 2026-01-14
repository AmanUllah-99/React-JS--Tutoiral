import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  //using stateHook//
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');



  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*~_-?,."
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char)
    }
    setPassword(pass)
  },

    [length, numAllowed, charAllowed ])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator   // to call passwordgenerator() in this from then a little problem
  },

    [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <div className='  justify-center  w-full max-w-fit mx-auto shadow-md rounded-lg px-4 m-10 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center  p-5 mx-3 flex  justify-center hover:text-orange-400 font-bold '> Password Generator</h1>
      <div className='flex shadow rounded-lg  overflow-hidden mb-4 bg-white'>
        <input
          type="text"
          value={password}
          className='outline-none w-full  py-1 px-3 text-black bg-white-800 '
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 hover:bg-orange-600'
        > Copy</button>
      </div>

      { /* lenght  */}
      <div className=' flex items-center gap-x-1 mb-3 p-2 '>
        <input
          type="range"
          min={6}
          max={99}
          value={length}
          className='cursor-pointer mb-3 p-2'
          onChange={(e) => { setLength(e.target.value) }}
        />
        <label className='mb-3 p-2' > Length:{length}</label>
        {/* number */}
        <div className='flex items-center gap-x-1 mb-3 p-2' >
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id='numInput '
            onChange={() => { setNumAllowed((prev) => !prev) }}

          />
          <label htmlFor='numInput' >Number</label>
        </div>

        {/* char */}
        <div className='flex items-center gap-x-1 mb-3 p-2'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => { setCharAllowed((prev) => !prev) }}

          />
          <label htmlFor="charInput">Characters</label>

        </div>

      </div>

    </div>
  )
}

export default App
