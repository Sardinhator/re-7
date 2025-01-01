import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/welcome" element={<WelcomePage />} />
                {/* Fallback 404 route */}
                <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>404 - Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>} />
            </Routes>
        </Router>
    );
};

export default App;
