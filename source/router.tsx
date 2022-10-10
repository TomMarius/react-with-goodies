import { createElement, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: createElement(lazy(() => import('@pages/home'))),
    },
]);
