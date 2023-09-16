import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Typography from './pages/typography/typography';
import Color from './pages/Color/color';
import Nav from './components/nav/nav';
import Search from './components/search/search';
import './App.css';

function App() {
  return (
    <>
      <div className="general__prici">
        <BrowserRouter>
          <div className="nav">
            <Nav />
          </div>

          <div className="searchh">
            <Search />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/color" element={<Color />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
