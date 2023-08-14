import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <h1 className='text-xl text-center '> Loading... </h1>
    }
    if(user){
        return children
    }
    
    return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>
};

export default PrivateRoute;