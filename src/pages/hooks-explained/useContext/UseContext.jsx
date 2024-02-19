import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { UseContextCodeSnippet } from './UseContextCodeSnippet'
import Dashboard from './dashboard'
import { DashboardContext } from './context'

const UseContext = () => {
  //  Example user object
  const user = { name: 'John Doe', email: 'john@example.com' } // Example user object
  return (
    <>
      <h4>
        The useContext hook in React is a function that allows you to consume
        context objects in function components. It simplifies the process of
        accessing global state and functions, making it easier to share these
        across your application without prop drilling. When you use useContext,
        your component will re-render whenever the context value changes.
      </h4>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>

      <SyntaxHighlighter language='javascript' style={dark}>
        {UseContextCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  )
}

export default UseContext
