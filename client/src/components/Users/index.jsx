import './index.scss';
import { useEffect, useState } from 'react';
// import axios from '../../api/axios';
import axios from "axios";

const Users = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        let isMounted = true
        const controller =new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get('/api/users', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
            
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [])

    return (
        <>

            <h1 className='users-title'>Users</h1>
            <article>
                <h2>Users List</h2>
                {users?.length
                    ? (
                        <ul>
                            {users.map((user, userId) => <li key={uuid}>{user?.
                            username}</li>)}
                        </ul>
                    ) : <p>No users to display</p>
                }
            </article>
        
        </>
    )
};

export default Users;

