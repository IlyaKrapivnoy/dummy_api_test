import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => response.json())
    //         .then((json) => setGetUsers(json));
    // }, []);

    useEffect(() => {
        return axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setGetUsers(response.data);
            });
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
