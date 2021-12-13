import React, { useEffect, useState } from 'react';

const Users = () => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((json) => setGetUsers(json));
    }, []);

    const [getUsers, setGetUsers] = useState([]);

    return (
        <>
            {console.log(getUsers)}
            <ul>
                {getUsers.map((user) => (
                    <li>{user.id}</li>
                ))}
            </ul>
        </>
    );
};

export default Users;
