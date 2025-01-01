import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password,
            });

            // Save the token in localStorage/cookies
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Recipe App</h1>
            <p>Explore recipes, register to save your favorites, and start cooking!</p>

            <div style={{ marginTop: '30px' }}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                fontSize: '14px',
                                width: '80%',
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                padding: '10px',
                                margin: '10px 0',
                                fontSize: '14px',
                                width: '80%',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginBottom: '20px', // Add margin-bottom for spacing
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>

            <Link to="/register" style={{ textDecoration: 'none' }}>
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#444',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Register Now !
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
