// UseStateCodeSnippet.js
export const UseEffectCodeSnippet = `
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { UseEffectCodeSnippet } from './UseEffectCodeSnippet'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("The count is" + count);
    return() => {
      console.log("I am being cleaned up");
    }
  }, [count])
  return (
    <>
      <h1>Count: {count}</h1>
      <ButtonGroup size='lg' aria-label='Basic example'>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </ButtonGroup>
      <SyntaxHighlighter language='javascript' style={dark}>
        {UseEffectCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  )
}

export default UseEffect
`
