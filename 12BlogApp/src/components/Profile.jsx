import React, { useState, useEffect } from 'react'
import authService from '../appwrite/auth'
function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await authService.getCurrentUser();
                setUser(user);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, []);

    return (
        <div>



        </div>
    )
}

export default Profile