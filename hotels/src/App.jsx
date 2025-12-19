import { useState } from 'react'
import './App.css'

import Button from './components/Button.jsx'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <h1>Vite + React</h1>

      <Button name={'count is ${count}'} onClick={() => setCount(6)} backgroundColor={'red'} />
    </>
  )
}

export default App
