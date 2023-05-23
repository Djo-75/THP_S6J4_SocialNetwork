import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
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
                    <NavLink to="/logout">
                        <li>Logout</li>
                    </NavLink>
                    <NavLink to="/post">
                        <li>Créer un post</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;