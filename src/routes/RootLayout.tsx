import { Outlet } from 'react-router-dom';

/**
 * Root layout encompassing the entire app
 *
 * Adds a top app bar for navigation and prohibits the user from navigating to any page before picking an environment
 */
const Layout = () => {
    return (
        <>
            <div className='w-screen bg-gray-500'>App header</div>
            <Outlet />
        </>
    );
};

export default Layout;
