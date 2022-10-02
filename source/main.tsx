import { createElement, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    createHashRouter,
    RouterProvider,
} from 'react-router-dom';

import { routes } from './routes';

const createRouter =
    process.env.NODE_ENV === 'development'
        ? createHashRouter
        : createBrowserRouter;

export const router = createRouter(
    routes.map((route) => ({
        path: route.path,
        element: route.lazy
            ? createElement(lazy(route.lazy))
            : route.element ?? <></>,
    })),
);

const root = createRoot(document.getElementById('root')!);
root.render(<RouterProvider router={router} />);
