import { type ReactElement } from 'react';

interface Route {
    path: string;
    element?: ReactElement;
    lazy?: () => Promise<{ default: () => ReactElement }>;
}

interface Routes {
    [key: string]: Route;
}

export const routes: Routes = {
    home: {
        path: '/',
        lazy: () => import('@pages/home'),
    },
};
