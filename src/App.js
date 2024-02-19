import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incerement</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
