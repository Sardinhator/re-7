import React, { useState } from 'react';
import './Register.css';
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear error on input change
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.username) errors.username = 'Username is required';
        if (!formData.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
        if (!formData.password) errors.password = 'Password is required';
        else if (formData.password.length < 8) errors.password = 'Password must be at least 8 characters';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Registration successful!');
                setFormData({ username: '', email: '', password: '' });
            } else {
                const errorData = await response.json();
                setErrors({ form: errorData.message });
            }
        } catch (error) {
            setErrors({ form: 'An unexpected error occurred. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
         <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} aria-label="Registration Form">
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        aria-required="true"
                        required
                    />
                    {errors.username && <small style={{ color: 'red' }}>{errors.username}</small>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-required="true"
                        required
                    />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        aria-required="true"
                        required
                    />
                    {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
                </div>
                {errors.form && <p style={{ color: 'red' }}>{errors.form}</p>}
                <button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
                    {isSubmitting ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Register;
