import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul className='nav-elements'>
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/register">
                        <li>Register</li>
                    </NavLink>
                    <NavLink to="/profile">
                        <li>Profile</li>
                    </NavLink>
                    <NavLink to="/login">
                        <li>Login</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;