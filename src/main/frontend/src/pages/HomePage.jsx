import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation(); // Import translation hook
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password,
            });

            // Save the token in localStorage/cookies
            localStorage.setItem('token', response.data.token);
            alert(t('login.success')); // Use translation for success message
            navigate('/welcome'); // Redirect to the welcome page
        } catch (error) {
            setError(t('login.invalid')); // Use translation for error message
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{t('welcome')}</h1>
            <p>{t('description')}</p>

            <div style={{ marginTop: '30px' }}>
                <h2>{t('login.title')}</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div>
                        <input
                            type="text"
                            placeholder={t('login.usernamePlaceholder')} // Translated placeholder
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
                            placeholder={t('login.passwordPlaceholder')} // Translated placeholder
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
                        {t('login.button')}
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
                    {t('register.button')}
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
