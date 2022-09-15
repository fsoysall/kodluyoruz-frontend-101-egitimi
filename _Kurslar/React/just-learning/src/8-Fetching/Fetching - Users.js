import { useEffect, useState,useRef } from 'react';

console.log("src/8-Fetching/Fetching - Users.js");

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://JsonPlaceHolder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => { console.log(data); setUsers(data); })
            .catch((e) => console(e))
            .finally(() => setIsLoading(false))
    }, []);

    return (
        <div>
            <h1>Fetching - Users</h1>
            {isLoading && <div>Loading...</div>}
            {
                users.map((user) => (
                    <div key={user.id}>{user.name}</div>
                ))}
        </div>
    );

}

export default Users;