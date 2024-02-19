import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useStateCodeSnippet } from './UseStateCodeSnippet'

const Usestate = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h4>
        The useState hook in React is a function that lets you add state
        management to function components. By calling useState, you create a
        single piece of state associated with that component. The hook returns
        an array containing the current state value and a function to update it.
        This enables function components to have their own state, without
        needing to convert them into class components.
      </h4>
      <h1>Count: {count}</h1>
      <ButtonGroup size='lg' aria-label='Basic example'>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </ButtonGroup>
      <SyntaxHighlighter language='javascript' style={dark}>
        {useStateCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  )
}

export default Usestate
