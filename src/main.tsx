import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from "./pages/Game.tsx";
import About from "./pages/About.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />  
        <Route path="/about" element={<About />} />    
      </Routes>
    </BrowserRouter>
)