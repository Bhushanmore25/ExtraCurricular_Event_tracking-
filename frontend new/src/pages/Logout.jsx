import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove the token from cookies
        Cookies.remove('token');

        // Call the backend to log out and clear the cookie server-side
        const logoutUser = async () => {
            try {
                const response = await fetch('http://localhost:3000/logout', {
                    method: 'GET',
                    credentials: 'include' // Include cookies in the request
                });

                if (response.ok) {
                    console.log('Logged out successfully');
                    navigate('/login'); // Redirect to login page
                } else {
                    throw new Error('Failed to log out');
                }
            } catch (error) {
                console.error('Error logging out:', error);
                navigate('/login');
            }
        };

        logoutUser();
    }, [navigate]);

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;
