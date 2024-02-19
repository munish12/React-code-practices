import React, { useMemo, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { UseMemoCodeSnippet } from './UseMemoCodeSnippet'
import { initialItems } from './utils'



const UseMemo = () => {
  const [count, setCount] = useState(0)
  const [items] = useState(initialItems)
  // Expensive operation
  // const selectedItems = items.find(item => item.isSelected)
  // Use memo
  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items],
  )

  return (
    <>
      <h4>
        UseMemo is a hook that memorizes a value and returns the same value
        until any of the depencies in the dependency array changes untill then
        it will recompute a new value.
      </h4>
      <h2>Count: {count}</h2>
      <h2>Selected Item: {selectedItem ? `Item ${selectedItem.id} is selected` : 'None'}</h2>
      <ButtonGroup size='lg' aria-label='Basic example'>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </ButtonGroup>
      <SyntaxHighlighter language='javascript' style={dark}>
        {UseMemoCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  )
}

export default UseMemo
