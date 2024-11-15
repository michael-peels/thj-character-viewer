import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { BazaarSearch } from './bazaar-search/BazaarSearch';
import { CharacterSearch } from './character-search/CharacterSearch';
import { Home } from './home/Home';
import { Layout } from './layout/Layout';
import './main.scss';
import { CharacterDetails } from './character-details/CharacterDetails';

const routing = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: '/characters', element: <CharacterSearch /> },
            { path: '/characters/:id', element: <CharacterDetails /> },
            { path: '/bazaar', element: <BazaarSearch /> },
            { path: '*', element: <Navigate to={'/'} /> }
        ]
    }
];
const router = createBrowserRouter(routing);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
