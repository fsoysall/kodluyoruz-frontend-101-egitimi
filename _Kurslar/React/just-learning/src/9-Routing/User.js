// import React from 'react'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, useRouteMatch, Switch, Route, Link, useParams  } from "react-router-dom";
import axios from 'axios';

export default 
function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

let { path, url } = useRouteMatch();

  const { topicId: Id  } = useParams();

  useEffect(() => {
    axios(`http://JsonPlaceHolder.typicode.com/users/${Id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [Id]);

  return (
    <div>
      <h1>User Detail [{Id}] / 
         <Link  style={{fontSize:"10pt"}}to={`${parseInt(Id) + 1}`}>- Next User ({parseInt(Id) + 1})</Link> / 
         <Link  style={{fontSize:"10pt"}}to={`${url}`}>- Next User (url)</Link> / 
         <Link  style={{fontSize:"10pt"}}to={`${path}`}>- Next User (path)</Link> / 
         <Link  style={{fontSize:"10pt"}}to={`/users/${parseInt(Id) + 1}`}>- Next User (users/{parseInt(Id) + 1})</Link>
         / 
         </h1>
      <hr />
      {loading && <div>Loading {Id}</div>}
      {!loading && <code>
        {user.name}[{user.username}] < br />
        {user.email} < br />
        {JSON.stringify(user.address)} < br />
        <hr />      {JSON.stringify(user)}<br />
      </code>
      }
    </div>
  )
}
 