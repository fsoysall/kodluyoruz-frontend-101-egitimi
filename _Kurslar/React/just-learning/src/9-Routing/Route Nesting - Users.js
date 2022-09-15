import React, { useState } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, useRouteMatch, Switch, Route, Link, NavLink, useParams } from "react-router-dom";

import axios from "axios";
import User from './User.js';



function Users() {
  const [users, setUsers] = useState([]);

  // The `path` lets us build <Route> paths that are relative to the parent route, 
  // while the `url` lets   // us build relative links.
  let { path, url } = useRouteMatch();


  useEffect(() => { axios("http://JsonPlaceHolder.typicode.com/users").then((res) => setUsers(res.data)); }, []);

  return (
    <div>
      <h1>Userssss</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id} >
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <Link to={`${url}/${u.id}`} >{u.id} {u.name}</Link>
                  </td>
                  <td>
                    <NavLink activeStyle={{ backgroundColor:"lightgreen" }} to={`${path}/${u.id}`} >{u.id} {u.name}</NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Kullanıcı Seçiniz</h3>
        </Route>

        <Route path={`${path}/:topicId`}>
          <User />
        </Route>
      </Switch>

    </div>
  )
}

export default Users
