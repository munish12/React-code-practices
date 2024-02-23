// UseStateCodeSnippet.js
export const DataFetchingCodeSnippet = `
import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Usestate = () => {
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
        const response = await fetch(\`$\{Base_URL}/posts?page=\$(page)\`, {
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
      <h1 className='mb-4 text-2xl'>Data Fething in React</h1>
      <Button onClick={() => setPage(page + 1)}>Incement Page {page}</Button>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && (
        <ul>
          {posts.map(post => {
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
      )}
    </>
  )
}

export default DataFetching
`;
