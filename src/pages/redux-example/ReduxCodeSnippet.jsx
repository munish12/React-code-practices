// UseStateCodeSnippet.js
export const ReduxCodeSnippet = `
// First step create store
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer
})

export default store

// 2nd step Create combine reducer
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
})


export default rootReducer;


// 3rd step and main step create counter slice or reducres
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState: {
    value: 0 // Initial state of the slice
  },
  reducers: {

    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync.pending")
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload
      })
  }
})

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async amount => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return amount
  }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

// 4TH STEP Add redux store as provider to render the component in which the reducer is applied
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  /<Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  /</Provider>
)

// 5TH STEP, use in component
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../redux/counter/counterSlice'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ReduxCodeSnippet } from './ReduxCodeSnippet'

const Counter = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
    </div>
  )
}

export default Counter




`;
