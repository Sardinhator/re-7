import React from 'react';

const WelcomePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome Back!</h1>
            <p>We are glad to see you again. Explore your favorite recipes or discover new ones!</p>
            <button
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => alert('Start exploring recipes!')}
            >
                Start Exploring
            </button>
        </div>
    );
};

export default WelcomePage;
