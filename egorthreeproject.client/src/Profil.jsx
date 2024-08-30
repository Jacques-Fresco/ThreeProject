import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchUserData = async () => {
            const token = localStorage.getItem('AccessToken');

            try {

                if (!token) {
                    console.error('No token found. User is not authenticated.')
                    return;
                }

                console.log("Token Profile:", token)

                const response = await fetch('https://localhost:7089//api/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        // 'Cache-Control': 'no-cache',
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));

                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const data = await response.json();

                console.log("DATA:", data)

                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

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
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="user-details">
                <div>
                    <strong>ID:</strong> {user.id}
                </div>
                <div>
                    <strong>Username:</strong> {user.username}
                </div>
                <div>
                    <strong>Email:</strong> {user.email}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
