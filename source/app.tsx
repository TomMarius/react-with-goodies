import { IntlProvider } from 'react-intl';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

export function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <IntlProvider locale='cz' defaultLocale='en'>
                <RouterProvider router={router} />
            </IntlProvider>
        </QueryClientProvider>
    );
}
