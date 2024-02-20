// UseStateCodeSnippet.js
export const UseReducerCodeSnippet = `
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      const newCount = state.count + 1
      const hasError = newCount > 5
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'maximun limit reached' : null
      }
    }
    case 'decrement': {
      const newCount = state.count - 1
      const hasError = newCount < 0
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'minimum limit reached' : null
      }
    }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null })
  return (
    <>
      <div>
        <h1>Count: {state.count}</h1>
        {state.error && <Alert variant='danger'>{state.error}</Alert>}
        <Button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
      </div>
    </>
  )
}

export default UseReducer
`
