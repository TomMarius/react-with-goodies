import { type ReactElement } from 'react';

export interface Route {
    path: string;
    element?: ReactElement;
    lazy?: () => Promise<{ default: () => ReactElement }>;
}

export const routes: Route[] = [
    {
        path: '/',
        lazy: () => import('./pages/home'),
    },
];
