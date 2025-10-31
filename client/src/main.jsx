import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import './main.css'
import App from './App.jsx'
import Login from './components/login/login.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/:userId/:userName" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
