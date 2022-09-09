import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ isAuth, children }) => {
    return isAuth
    ? children
    : <Navigate to="/Index" />
}

export default PrivateRoutes;