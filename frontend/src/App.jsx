import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} index />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );

}

export default App;