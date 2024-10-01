import ReactDOM from 'react-dom/client';
import Game from "./pages/GamePage.tsx";
import Home from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="https://han-lue.github.io/bestseller_game/" element={<Home />} />  
        <Route path="https://han-lue.github.io/bestseller_game/game" element={<Game />} />    
      </Routes>
    </BrowserRouter>
)