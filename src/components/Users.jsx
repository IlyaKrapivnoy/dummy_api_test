import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
    useEffect(() => {
        const APP_ID = '61b724480aaff9678bd56847';
        axios
            .get('https://dummyapi.io/data/v1/user/', {
                headers: {
                    'app-id': APP_ID,
                },
            })
            .then(function (response) {
                setGetUsers(response.data.data);
            });
    }, []);

    const [getUsers, setGetUsers] = useState([]);

    return (
        <>
            {console.log(getUsers)}
            <ul>
                {getUsers.map((user) => (
                    <li key={user.id}>
                        <img src={user.picture} alt='user' />
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Users;
