import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Index from '../components/landing-page/Index';
import Store from '../components/Store';



const DashboardRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/navBar' element={<NavBar />} /> */}
                <Route path="*" element={<Navigate to="/store2" />} />
                <Route path="/store2" element={<Store />} />

            </Routes>
        </>
    )
}

export default DashboardRouters;