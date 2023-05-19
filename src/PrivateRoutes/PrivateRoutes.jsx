import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {

    let auth = { 'token': true }

    return (
        auth.token ? <Outlet /> : <NavLink to='/login' />
    )

};

export default PrivateRoutes;