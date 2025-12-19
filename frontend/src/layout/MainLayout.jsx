import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
    const location = useLocation();

    // Exclude login/signup pages from NavBar/Footer
    const excludedPaths = ['/admin/login', '/login', '/register'];
    const showNavFooter = !excludedPaths.includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {showNavFooter && <Navbar />}

            <main className="flex-1">
                <Outlet />
            </main>

            {showNavFooter && <Footer />}
        </div>
    );
};

export default Main;
