import './aStyles.css';
import { useEffect, useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink,
  useParams,
  useRouteMatch,
  Redirect
} from "react-router-dom";

// console.log("src/9-Routing/App - Routing.js");

import Home from './Home.js'
import About from './About.js'
import UsersNested from './Route Nesting - Users.js'
import User from './User.js'
import Topics from './Topics.js'
import NoMatch from './NoMatch-404.js'

console.log("src/9-Routing/Route Nesting - App.js");


export default
  function AppRouteNesting() {
  return (
    <Router>App - RouteNesting.js
      <div>
        <nav>
          <ul>
            <li> <NavLink activeClassName='activeLink' to="/"      >Home</NavLink>            </li>
            <li> <NavLink activeStyle={{ backgroundColor: "lightgreen" }} to="/about" >About</NavLink>            </li>
            <li> <NavLink activeStyle={{ backgroundColor: "lightgreen" }} to="/topics">Topics</NavLink>            </li>
            <hr />
            <li> <NavLink activeStyle={{ backgroundColor: "lightgreen" }} to="/users" >Users</NavLink>            </li>
            <hr />
            <li> <NavLink activeClassName='activeLink' to="/usersssss" >Usersssss</NavLink>            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Home} exact  /* <Redirect to="qqq" /> */ />
          <Route path="/about" component={About} />
          <Route path="/users" component={UsersNested} />
          <Route path="/user/:id" component={User} />
          <Route path="/topics" component={Topics} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


function WillMatch() {
  return <h3>Matched!</h3>;
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

