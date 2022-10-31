import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDetail from '../components/Store/ProductDetail';
import Store from '../components/Store/Store';
import UserDetails from '../components/UserDetails';



const DashboardRouters = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Store />} />
                {/* <Route path='/navBar' element={<NavBar />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/UserDetials" element={<UserDetails />} />
                {/* <Route path="/store2" element={<Store />} /> */}
                {/* <Route path="description2/:id" element={<ProductDetail />} /> */}

            </Routes>
        </>
    )
}

export default DashboardRouters;