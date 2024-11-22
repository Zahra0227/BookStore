import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/books/list');
        } catch (error) {
            console.error(error);
            alert('error!');
        }
    };

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Enter</button>
        </form>
        </div>
    );
};

export default Login;
