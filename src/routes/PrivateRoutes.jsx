import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import Loader from '../components/Loader/Loader'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loader />
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

PrivateRoute.propTypes = {
    children: PropTypes.any,
};
export default PrivateRoute