import './global.css';

import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
    </QueryClientProvider>,
);
