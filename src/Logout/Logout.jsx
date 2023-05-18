import React from 'react';
import Cookies from 'js-cookie';

const Logout = () => {

    const handleLogout = () => {
        Cookies.remove("token")
    }

    return (
        <div>
            <h2>Logout</h2>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;