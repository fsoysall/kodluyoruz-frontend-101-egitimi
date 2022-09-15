import { useEffect, useState, useParams } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// console.log("src/9-Routing/App - Routing.js");

import Home from './Home.js'
import About from './About.js'
import Users from './Users.js'
import User from './User.js'

console.log("src/9-Routing/App - Routing.js");


// export default
function App() {
  return (
    <Router>
      <div>
        App - Routing  <nav>
          <ul>
            <li> <Link to="/"      >Home</Link>            </li>
            <li> <Link to="/about" >About</Link>            </li>
            <li> <Link to="/users" >Users</Link>            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
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

export default App;
