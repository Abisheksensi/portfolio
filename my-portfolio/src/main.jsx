import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import EnterPage from './pages/EnterPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<EnterPage />} />
      <Route path="/home" element={<App />} />
    </Routes>
  </BrowserRouter>
);
