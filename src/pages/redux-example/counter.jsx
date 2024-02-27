import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../redux/counter/counterSlice'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ReduxCodeSnippet } from './ReduxCodeSnippet'

const Counter = () => {
    // useSelector is a React hook provided by the React Redux library. It allows functional components in a React application to extract data from the Redux store state. This hook subscribes the component to the Redux store, and it will re-render the component whenever the selected data in the store changes.
  // useDispatch is a hook provided by React Redux that gives components access to the Redux dispatch function.
  // increment and decrement are action creators imported from the counterSlice file.
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
      <SyntaxHighlighter language='javascript' style={dark}>
        {ReduxCodeSnippet.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

export default Counter
