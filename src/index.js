import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import P2025 from './P2025'
import P2026 from './P2026'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
        <Route path="/" element={<P2025 />} />
        <Route path="/p2026" element={<P2026 />} />
        <Route path="/p2025" element={<P2025 />} />
      </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

