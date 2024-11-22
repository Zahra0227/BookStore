import  { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [userData, setUserData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const register = async () => {
        try {
            const response = await axios.post('/api/auth/register', userData);
            localStorage.setItem('token', response.data.token);
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration error:', error.response.data);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" />
            <button onClick={register}>Register</button>
        </div>
    );
};

export default Register;