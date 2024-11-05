import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './character-search/CharacterSearch';
import './main.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </StrictMode>
);
