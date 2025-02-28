import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.post('/api/login', {
                nickname,
                password,
            });

            console.log('Success:', response.data);
            alert('Login Successful!');

            localStorage.setItem('token', response.data.token);

            navigate('/');

        } catch (error) {
            console.error('Error:', error);
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 401) {
                    setErrorMessage('Неверные учетные данные. Пожалуйста, попробуйте еще раз.');
                } else {
                    setErrorMessage('Ошибка входа. Пожалуйста, попробуйте позже.');
                }
            } else {
                setErrorMessage('Ошибка сети. Пожалуйста, проверьте подключение к интернету.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-24">
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                {errorMessage && <div className="mb-4 text-red-600">{errorMessage}</div>}
                <div className="mb-5">
                    <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900">Ваш никнейм</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Ваш пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="******"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`text-white ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l'} 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center`}
                >
                    {loading ? 'Вход...' : 'Войти'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
