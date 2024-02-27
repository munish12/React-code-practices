import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './components/sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import Usestate from './pages/hooks-explained/useState/Usestate'
import UseEffect from './pages/hooks-explained/useEffect/UseEffect'
import UseMemo from './pages/hooks-explained/useMemo/UseMemo'
import UseCallback from './pages/hooks-explained/useCallback/UseCallback'
import UseContext from './pages/hooks-explained/useContext/UseContext'
import UseRef from './pages/hooks-explained/useRef/useRef'
import UseReducer from './pages/hooks-explained/useReducer/useReducer'
import DataFetching from './pages/hooks-explained/dataFetching/dataFetching'
import UseDebounce from './pages/hooks-explained/useDebounce/useDebounce'
import ReactQuery from './pages/react-query/ReactQuery'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Counter from './pages/redux-example/counter'

function App () {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Sidebar />
        {/* Wrap the Routes in a div with the px-5 class for padding */}
        <div className='px-5 d-flex flex-column justify-content-center align-items-center h-100 mt-5 pt-5'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/useState' element={<Usestate />} />
            <Route path='/useEffect' element={<UseEffect />} />
            <Route path='/useMemo' element={<UseMemo />} />
            <Route path='/useCallback' element={<UseCallback />} />
            <Route path='/useContext' element={<UseContext />} />
            <Route path='/UseRef' element={<UseRef />} />
            <Route path='/UseReducer' element={<UseReducer />} />
            <Route path='/data-fetching' element={<DataFetching />} />
            <Route path='/UseDebounce' element={<UseDebounce />} />
            <Route path='/reactQuery' element={<ReactQuery />} />
            <Route path='/redux-example' element={<Counter />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
