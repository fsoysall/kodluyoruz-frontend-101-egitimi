// Native Fetch Users
import { useEffect, useState } from 'react'

function NativeFetch_Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://JsonPlaceHolder.typicode.com/users")
            .then((res) => res.json)
            .then((data) => {console.log(data); setUsers(data);}
            );
}, []);

return (
    <div>
        <h1>Users</h1>
        {users.map((u) => (<div key={user.id}>{u.name}</div>))}
    </div>
)
}

export default NativeFetch_Users;