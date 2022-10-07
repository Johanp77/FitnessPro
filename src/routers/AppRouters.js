import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Index from '../components/landing-page/Index';
import ProductDetail from '../components/Store/ProductDetail';
import Store from '../components/Store/Store';
import { authStatusChanger } from '../redux/actions/authActions';
// import Home from '../components/Home';
// import Register from '../components/auth/Register';
import DashboardRouters from './DashboardRouters';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';


const AppRouters = () => {

  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState(false)

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
        dispatch(authStatusChanger())
      }
      else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [setIsLoggedIn, setChecking])

  if (checking) {
    return (
      <h1>Procesando información...</h1>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rutas Publicas */}
          <Route path='/index' element={
            // <PublicRoutes isAuth={isLoggedIn}>
              <Index />
            // {/* </PublicRoutes> */}
          }
          />

          <Route path='/login' element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          } />

          <Route path='/register' element=
            {<PublicRoutes isAuth={isLoggedIn}>
              <Register />
            </PublicRoutes>
            } />

          <Route path='/Store' element={
            // {<PublicRoutes isAuth={isLoggedIn}>
              <Store />
            // {/* </PublicRoutes> */}
            } />

          <Route exact path='description/:id' element={
            // <PublicRoutes isAuth={isLoggedIn} >
              <ProductDetail />
            // {/* </PublicRoutes> */}
          } />

          {/* Rutas Privadas */}
          <Route path='/*' element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <DashboardRouters />
            </PrivateRoutes>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouters;