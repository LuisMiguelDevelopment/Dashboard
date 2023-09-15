import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import Nav from './components/nav/nav'
import Search from './components/search/search'
import './App.css'

function App() {
  

  return (
    <>
    <div className="general__prici">
        <div className="nav">
                <Nav/>
            </div>
            
          <BrowserRouter>
            <div className="searchh">
                <Search/>
                <Routes>
                  <Route  path='/' element={<Dashboard/>} />
                </Routes>
            </div> 
            
          </BrowserRouter>
    </div>
        
    </>
  )
}

export default App
