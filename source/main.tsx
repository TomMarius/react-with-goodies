import './global.css';

import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const router = createBrowserRouter(Object.values(routes));

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
    </QueryClientProvider>,
);
