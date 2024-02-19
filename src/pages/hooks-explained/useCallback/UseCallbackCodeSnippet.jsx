// UseStateCodeSnippet.js
export const UseCallbackCodeSnippet = `
import React, { useCallback, useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { UseCallbackCodeSnippet } from './UseCallbackCodeSnippet'
import Search from './search'
import { shuffle } from '../../../utils/helpers'

const allUsers = ['john', 'alex', 'george', 'simon', 'james']

const UseCallback = () => {
  const [users, setUsers] = useState(allUsers)

  const handleSearch = useCallback(
    text => {
      console.log(users[0])
      const FilteredUsers = allUsers.filter(user => user.includes(text))
      setUsers(FilteredUsers)
    },
    [users]
  )

  return (
    <>
      <Stack direction='horizontal' gap={3} className='mx-auto'>
        <div className='p-2'>
        <Button onClick={() => setUsers(shuffle([...allUsers]))}>Shuffle</Button>
          <Search onChange={handleSearch} />
          <ul>
            {users.map(user => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </div>
        <div className='p-2'>
          <SyntaxHighlighter language='javascript' style={dark}>
            {UseCallbackCodeSnippet.trim()}
          </SyntaxHighlighter>
        </div>
      </Stack>
    </>
  )
}

export default UseCallback

`
