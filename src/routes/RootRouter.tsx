import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './RootPage';
import HomePage from './home/HomePage';
import Layout from './RootLayout';
import SignInPage from './signin/SignInPage';
import SignOut from './signout/SignOut';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/signin',
                element: <SignInPage />
            },
            {
                path: '/signout',
                element: <SignOut />
            },
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <HomePage />
                    }
                ]
            }
        ]
    }
]);

const RootRouter = () => <RouterProvider router={router} />;

export default RootRouter;
