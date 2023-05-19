import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigateLogOut = useNavigate();

    const handleLogout = () => {
        Cookies.remove("token")
        navigateLogOut("/")
    }



    return (
        <div>
            <h2>Logout</h2>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;