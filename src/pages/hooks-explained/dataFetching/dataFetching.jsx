import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, ButtonGroup, Stack } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { DataFetchingCodeSnippet } from './dataFetchingSnippet'
import { Audio, Oval } from 'react-loader-spinner'

const Base_URL = 'https://jsonplaceholder.typicode.com'

const DataFetching = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(0)
  const abortControllerRef = useRef(null)

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()
      setIsLoading(true)
      try {
        const response = await fetch(`${Base_URL}/posts?page=$(page)`, {
          signal: abortControllerRef.current?.signal
        })
        const posts = await response.json()
        setPosts(posts)
      } catch (e) {
        if (e.name === 'AbortError') {
          console.log('aborted')
          return
        }
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [page])

  if (error) {
    console.log(error)
    return <Alert variant='danger'>something went wrong</Alert>
  }

  return (
    <>
      {isLoading && (
        <Oval
          visible={true}
          height='80'
          width='80'
          color='#4fa94d'
          ariaLabel='oval-loading'
          wrapperStyle={{}}
          wrapperClass='loader'
        />
      )}
      <Stack direction='horizontal' gap={3} className='mx-auto'>
        <div className='p-2'>
          <h1 className='mb-4 text-2xl'>Data Fetching in React</h1>
          <Button onClick={() => setPage(page + 1)}>
            Incement Page {page}
          </Button>

          {!isLoading && (
            <ul style={{ height: '500px', overflow: 'auto' }}>
              {posts.map(post => {
                return <li key={post.id}>{post.title}</li>
              })}
            </ul>
          )}
        </div>

        <div className='p-2'>
          <SyntaxHighlighter language='javascript' style={dark}>
            {DataFetchingCodeSnippet.trim()}
          </SyntaxHighlighter>
        </div>
      </Stack>
    </>
  )
}

export default DataFetching
