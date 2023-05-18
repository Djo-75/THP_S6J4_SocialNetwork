import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const handleIdentifierChange = (e) => {
        setIdentifier(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Here you can implement your authentication logic
        // For simplicity, let's just log the entered Identifier and password
        const data = {
            identifier: identifier,
            password: password
        };

        fetch('http://localhost:1337/api/auth/local/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((responseData) => {
                const token = responseData.jwt;
                console.log(responseData.jwt)
                Cookies.set("token", token);
            });


    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Identifier:
                    <input type="text" name={identifier} onChange={handleIdentifierChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;