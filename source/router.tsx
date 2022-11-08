import { createElement, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: createElement(lazy(() => import('@pages/home'))),
    },

    {
        path: '/sign-up',
        element: createElement(lazy(() => import('@pages/sign-up'))),
    },

    {
        path: '/log-in',
        element: createElement(lazy(() => import('@pages/log-in'))),
    },
    {
        path: '/log-out',
        element: createElement(lazy(() => import('@pages/log-out'))),
    },

    {
        path: '/password-change',
        element: createElement(lazy(() => import('@pages/password-change'))),
    },
    {
        path: '/password-reset',
        element: createElement(lazy(() => import('@pages/password-reset'))),
    },

    {
        path: '/settings',
        element: createElement(lazy(() => import('@pages/settings'))),
    },
]);
