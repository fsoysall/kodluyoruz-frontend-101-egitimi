import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router,useRouteMatch, Switch, Route, Link, useParams } from "react-router-dom";

import axios from "axios";



function Users() {
  const [users, setUsers] = useState([]);
  let { path, url } = useRouteMatch();

  useEffect(() =>{ axios("http://JsonPlaceHolder.typicode.com/users").then((res) => setUsers(res.data));},[]);

  return (
    <div>
      <h1>Userssss</h1>
      <ul>
        {users.map((u) => ( <li key={u.id} ><Link to={`/user/${u.id}`} >{u.id} {u.name}</Link> </li> )) }
      </ul>
    </div>
  )
}

export default Users
