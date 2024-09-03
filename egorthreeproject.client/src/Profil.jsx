import React, { useState, useEffect } from 'react';
import AvatarInput from './AvatarInput.jsx';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [originalUsername, setOriginalUsername] = useState(''); // Хранит оригинальное имя пользователя
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('AccessToken');
        
            try {
                if (!token) {
                    console.error('No token found. User is not authenticated.');
                    return;
                }
        
                const response = await fetch('api/userprofile/profile', {
                    method: 'GET',
                    headers: {
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                });
        
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
        
                const data = await response.json();
                setUser(data);
                setNewUsername(data.username);
                setOriginalUsername(data.username); // Устанавливаем оригинальное имя пользователя
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
        setHasChanges(event.target.value !== originalUsername); // Сравниваем с оригинальным именем
    };

    const handleUpdateUsername = async () => {
        const token = localStorage.getItem('AccessToken');

        try {
            const response = await fetch('api/userprofile/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ Username: newUsername }),
            });

            if (!response.ok) {
                throw new Error('Ошибка при обновлении имени пользователя');
            }

            const data = await response.json();
            console.log(data.Message); // Сообщение об успешном обновлении
            setUser(prevUser => ({ ...prevUser, username: newUsername })); // Обновляем локальные данные
            setOriginalUsername(newUsername); // Обновляем оригинальное имя пользователя
            setIsEditing(false);
            setHasChanges(false);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCancelEdit = () => {
        setNewUsername(originalUsername); // Сбрасываем имя пользователя
        setIsEditing(false);
        setHasChanges(false);
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (!user) {
        return <div>Пользователь не найден</div>;
    }

    return (
        <div className="user-profile" style={{ padding: '50px', paddingRight: '100px', width: '350px', margin: '200px auto'}}>
            <h2 style={{ display: 'flex', justifyContent: 'center' }}>User Profile</h2>
            <AvatarInput />
            <div className="user-details">
                <div>
                    <strong>ID:</strong> {user.userId}
                </div>
                <div style={{display: 'flex'}}>
                    <strong>Username:</strong>
                    {isEditing ? (
                        <>
                            <input 
                                type="text" 
                                style={{display: 'block'}}
                                value={newUsername} 
                                onChange={handleUsernameChange} 
                            />
                            <button onClick={handleUpdateUsername} disabled={!hasChanges}>
                                Сохранить
                            </button>
                            <button onClick={handleCancelEdit}>
                                Отменить
                            </button>
                        </>
                    ) : (
                        <>
                            {user.username}
                            <button onClick={() => {
                                setIsEditing(true);
                                setNewUsername(user.username); // Устанавливаем текущее имя пользователя при редактировании
                                setOriginalUsername(user.username); // Сохраняем оригинальное имя для отмены
                            }}>
                                Изменить
                            </button>
                        </>
                    )}
                </div>
                <div>
                    <strong>Email:</strong> {user.email}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
