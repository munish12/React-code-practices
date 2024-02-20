// UseStateCodeSnippet.js
export const UseRefCodeSnippet = `
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
      <input ref={inputRef} type='text' />
      <Button onClick={handleClick}>Focus the Input</Button>
    </>
  )
}

export default UseRef

`;
