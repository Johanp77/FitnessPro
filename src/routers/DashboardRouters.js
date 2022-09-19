import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Index from '../components/landing-page/Index';
import Store from '../components/Store';
import UserDetails from '../components/UserDetails';



const DashboardRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/navBar' element={<NavBar />} /> */}
                <Route path="*" element={<Navigate to="/store2" />} />
                <Route path="/UserDetials" element={<UserDetails />} />
                <Route path="/store2" element={<Store />} />

            </Routes>
        </>
    )
}

export default DashboardRouters;