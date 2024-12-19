import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='min-h-screen mx-auto'>
            {/* <div className='bg-teal-400'> */}
            <Navbar />
            {/* </div> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;