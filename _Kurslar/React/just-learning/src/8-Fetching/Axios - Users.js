import { useEffect, useState } from 'react';

import axios from 'axios'

console.log("src/8-Fetching/Axios - Users.js");


function Axios_Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios("https://JsonPlaceHolder.typicode.com/users")
            .then((res) => { console.log(res); setUsers(res.data); })
            .catch((e) => console(e))
            .finally(() => setIsLoading(false))
    }, []);

    return ( 
        <div>
            <h1>Axiosing - Users</h1>
            {isLoading && <div>Loading...</div>}
            {
                users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))}
        </div>
    );

}

export default Axios_Users;