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


function App() {
  return (
    <Router>
        <Sidebar />
        {/* Wrap the Routes in a div with the px-5 class for padding */}
        <div className="px-5 d-flex flex-column justify-content-center align-items-center h-100 mt-5 pt-5">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/useState' element={<Usestate />} />
            <Route path='/useEffect' element={<UseEffect />} />
            <Route path='/useMemo' element={<UseMemo />} />
            <Route path='/useCallback' element={<UseCallback />} />
            <Route path='/useContext' element={<UseContext />} />
            
          </Routes>
        </div>
    </Router>
  );
}

export default App
