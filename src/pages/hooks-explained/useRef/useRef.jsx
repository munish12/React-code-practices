import React, { useEffect, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { UseRefCodeSnippet } from './useRefCodeSnippet'

const UseRef = () => {
  const inputRef = useRef(null)
  const handleClick = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <h4>
        <b>What is useRef?</b> <br></br> <b>Persistent storage: </b>The useRef
        hook gives you a special object (called a "ref") whose .current property
        can hold any value throughout the entire life of your component. This
        value survives even when the component re-renders.
        <br></br>
        <b>Not for re-rendering: </b>Importantly, changing the value inside a
        ref does not cause your component to re-render. Common Use Cases
        Accessing DOM elements directly: Sometimes you need to work with a part
        of the page outside of React's typical flow. useRef lets you "grab" a
        DOM element and do things like: Focusing input fields Measuring the size
        of an element Triggering animations manually Storing values without
        triggering re-renders: If you need to store a value that you'll change
        but shouldn't cause the component to update visually, useRef is perfect.
        Examples: Holding a timer ID so you can clear it later Tracking the
        previous state of a value
      </h4>
      <input ref={inputRef} type='text' />
      <Button onClick={handleClick}>Focus the Input</Button>
      <SyntaxHighlighter language='javascript' style={dark}>
        {UseRefCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  )
}

export default UseRef
