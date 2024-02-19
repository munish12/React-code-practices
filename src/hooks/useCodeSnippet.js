import { useState, useEffect } from 'react'

const useCodeSnippet = snippetPath => {
  const [codeSnippet, setCodeSnippet] = useState('')
  useEffect(() => {
    const loadCodeSnippet = async () => {
      try {
        const snippet = await import(`${snippetPath}`)
        console.log("Imported snippet:", snippet);
        setCodeSnippet(snippet.default.code)
      } catch (error) {
        console.error('Error loading code snippet:', error)
        setCodeSnippet('')
      }
    }
    loadCodeSnippet()
  }, [snippetPath])

  return codeSnippet
}

export default useCodeSnippet
