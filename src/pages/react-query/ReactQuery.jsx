import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ReactQueryCodeSnippet } from './ReactQueryCodeSnippet'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addTodo, fetchTodos } from './api'
import TodoCard from './ToDoCard'
import { Oval } from 'react-loader-spinner'
import { Button } from 'react-bootstrap'

const ReactQuery = () => {
  const [showdemo, setShowDemo] = useState(true)
  const queryClient = useQueryClient()
  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ['todos', { search }],
    // cacheTime: 0,
    staleTime: 0
  })

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  if (isLoading) {
    return (
      <Oval
        visible={true}
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='oval-loading'
        wrapperStyle={{}}
        wrapperClass='loader'
      />
    )
  }

  return (
    <>
      <Button onClick={() => setShowDemo(!showdemo)}>Toogle Demo</Button>
      {showdemo && (
        <>
          <h4>
            React Query is a JavaScript library designed to simplify and
            optimize data fetching and state management in React applications,
            particularly those that interact with remote data sources such as
            APIs. It provides a set of hooks and utilities that make it easy to
            fetch, cache, update, and synchronize data across components.
          </h4>

          <input onChange={e => setTitle(e.target.value)} value={title} />
          <Button
            onClick={async () => {
              try {
                console.log('Adding todo...')
                await addTodoMutation({ title })
                console.log('Todo added successfully')
                setTitle('')
              } catch (e) {
                console.error(e)
              } finally {
              }
            }}
          >
            Add Todo
          </Button>
          <ul>
            {todos.map(todo => {
              return <TodoCard key={todo.id} todo={todo} />
            })}
          </ul>
        </>
      )}
      <SyntaxHighlighter language='javascript' style={dark}>
        {ReactQueryCodeSnippet.trim()}
      </SyntaxHighlighter>
    </>
  )
}

export default ReactQuery
