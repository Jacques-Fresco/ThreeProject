import React from 'react';

const Logout = () => {

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expirationAccessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('exprirationRefreshToken');

        navigate('/', { replace: true });
    }

    return (
        <button onClick={handleLogout}>Выход</button>
    );
};

export default Logout;