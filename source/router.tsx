import { createBrowserRouter, createHashRouter } from 'react-router-dom';

import { HomePage } from './pages/home';

const createRouter =
    process.env.NODE_ENV === 'development'
        ? createHashRouter
        : createBrowserRouter;

export const router = createRouter([{ path: '/', element: <HomePage /> }]);
