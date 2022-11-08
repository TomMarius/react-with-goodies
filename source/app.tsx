import { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

export function App() {
    return (
        <Suspense>
            <QueryClientProvider client={new QueryClient()}>
                <IntlProvider locale='en' defaultLocale='en'>
                    <RouterProvider router={router} />
                </IntlProvider>
            </QueryClientProvider>
        </Suspense>
    );
}
