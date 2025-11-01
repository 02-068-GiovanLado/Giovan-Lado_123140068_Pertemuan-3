// Router utama
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';

function App() {
  return (
    <BookProvider>
      <Router>
        <nav style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '16px' }}>Beranda</Link>
          <Link to="/stats">Statistik</Link>
        </nav>
        <div style={{ padding: '16px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;