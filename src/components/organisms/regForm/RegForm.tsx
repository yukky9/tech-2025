import React, {useState} from 'react';

const RegForm: React.FC = () => {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        if (password !== repeatPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        // Здесь можно добавить логику для регистрации пользователя
        console.log('Nickname:', nickname);
        console.log('Password:', password);
        // Выполните регистрацию пользователя
    };

    return (
        <div className="mt-24">
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900">Ваш
                        никнейм</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)} // Обновляем состояние
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Ваш
                        пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Обновляем состояние
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="********"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900">Повторите
                        пароль</label>
                    <input
                        type="password"
                        id="repeat-password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)} // Обновляем состояние
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="********"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className=" w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegForm;
