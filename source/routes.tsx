import { createElement, lazy } from 'react';
import { type RouteObject } from 'react-router-dom';

export const routes: Record<string, RouteObject> = {
    home: {
        path: '/',
        element: createElement(lazy(() => import('@pages/home'))),
    },
};
