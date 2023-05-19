import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, redirect, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext)

    const location = useLocation();

    if (loader) {
        return <>
            <div className='min-h-screen text-center '>
                <progress className="progress w-96 mt-24"></progress>
            </div>
        </>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>


};

export default PrivateRoute;