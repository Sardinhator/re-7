import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Recipe App</h1>
            <p>Explore recipes, register to save your favorites, and start cooking!</p>
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
                    Register Now
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
