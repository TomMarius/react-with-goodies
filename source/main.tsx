import './global.css';

import { createElement, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const router = createBrowserRouter(
    routes.map((route) => ({
        path: route.path,
        element: route.lazy
            ? createElement(lazy(route.lazy))
            : route.element ?? <></>,
    })),
);

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
    </QueryClientProvider>,
);
