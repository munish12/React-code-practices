import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Stack } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { UseEffectCodeSnippet } from './UseEffectCodeSnippet'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('The count is' + count)
    return () => {
      console.log('I am being cleaned up')
    }
  }, [count])
  return (
    <>
      <Stack direction='horizontal' gap={3} className="mx-auto">
        <div className='p-2'>
          <h4>The useEffect hook in React is a function that enables you to perform side effects in function components. It serves as a combination of componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods from class components, allowing effects to run after the component renders. useEffect can be used for data fetching, subscriptions, manually changing the DOM, and more. It accepts two parameters: a function that contains the side effect logic, and an optional dependency array specifying when the effect should rerun or cleanup.</h4>
          <h1>Count: {count}</h1>
          <ButtonGroup size='lg' aria-label='Basic example'>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Button onClick={() => setCount(count - 1)}>Decrement</Button>
          </ButtonGroup>
        </div>
        <div className='p-2'>
          <SyntaxHighlighter language='javascript' style={dark}>
            {UseEffectCodeSnippet.trim()}
          </SyntaxHighlighter>
        </div>
      </Stack>
    </>
  )
}

export default UseEffect
