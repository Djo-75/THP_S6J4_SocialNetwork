import React, { useState } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's just log the entered username and password
    const data = {
      username: username,
      email: email,
      password: password
    };

    fetch('http://localhost:1337/api/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };



  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" name={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name={email} onChange={handleEmail} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  )
}

export default App
