import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import Home from './page/Home';

const App = () => {
  return (
    <Router>
      <h1>Selamat datang!</h1>
        {/* Gunakan Link untuk membuat tombol login */}
        <Link to="/login" className="button">
          Login
        </Link>

        {/* Rute untuk halaman Home */}
        <Routes>
          <Route path="/login" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;
