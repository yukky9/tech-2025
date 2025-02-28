import React, { useState } from 'react';
import axios from 'axios';

const RegForm: React.FC = () => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== repeatPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.post('/api/register', {
                nickname,
                password,
            });

            console.log('Registration Success:', response.data);
            alert('Регистрация успешна!');
        } catch (error) {
            console.error('Registration Error:', error);
            if (axios.isAxiosError(error) && error.response) {
                // Обработка различных статусов ошибок
                if (error.response.status === 400) {
                    setErrorMessage('Некорректные данные. Пожалуйста, проверьте и попробуйте снова.');
                } else if (error.response.status === 409) {
                    setErrorMessage('Никнейм уже занят. Пожалуйста, выберите другой.');
                } else {
                    setErrorMessage('Ошибка регистрации. Пожалуйста, попробуйте еще раз.');
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
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="********"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Повторите пароль</label>
                    <input
                        type="password"
                        id="repeat-password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="********"
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Загрузка...' : 'Зарегистрироваться'}
                </button>
            </form>
        </div>
    );
};

export default RegForm;
